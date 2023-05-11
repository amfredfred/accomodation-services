import { useLocalStorage } from 'usehooks-ts'
import { IAccomodationServices, AccomodationServices, IBooking } from '../../../Constants/Interfaces'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { motion } from 'framer-motion'
import { rooms } from '../../../__dummy__';
import { IRoom } from '../../../Constants/Interfaces';
import { ArrowForward, ArrowLeft, ArrowRight, Atm, Drafts, Photo, Restaurant, Spa, Water, Wifi } from "@mui/icons-material";
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, Rating, Select, Tooltip } from '@mui/material';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useState } from 'react'
import dayjs from 'dayjs';
import { fmtNumCompact, mean, sumCosts, timeFrom } from '../../../Helpers';
import { useHandleCartToggle } from '../../Components/Cart';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


export const useBooking = () => {
    const [app, setService] = useLocalStorage<IAccomodationServices>('@AccomodationServices', AccomodationServices)
    const { toggleCart } = useHandleCartToggle()
    const [activeRoom, setactiveRoom] = useState<IRoom>()
    const [booking, setbooking] = useState<IBooking>({
        adults_count: 2,
        children_count: '' as any,
        check_in: dayjs((activeRoom?.bookedTill ?? Date.now())) as any,
        check_out: dayjs((activeRoom?.bookedTill ?? Date.now()) + 86400 * 1000) as any
    })

    const cartRoom = (room: IRoom, selectedId: IRoom['id'], isChecked: boolean) => {
        //@devfred
        const cartedRooms = app?.cart?.selections?.filter((room: IRoom) => room?.id !== selectedId) || []
        const { subTotal, subT } = sumCosts(booking?.check_out, booking?.check_in, room?.price);
        (room as any)['subTotal'] = subTotal
        isChecked || cartedRooms.push({ ...room, ...booking })
        setService(params => params = { ...params, cart: { ...params.cart, selections: cartedRooms as [IRoom] } })
    }

    const addService = (serviceId: IRoom['services'], selectedId: IRoom['id'], payload: any) => {
        //@devfred 
        setbooking(B => B = { ...B, [serviceId as string]: payload })
        const cartedRooms = app?.cart?.selections?.map((room: IRoom) => {
            if (room?.id === selectedId) {
                (room as any)[serviceId as string] = payload
                const { subTotal, subT } = sumCosts(room?.check_out, room?.check_in, room?.price);
                (room as any)['subTotal'] = subTotal
            }
            return room
        }) || []
        console.log(cartedRooms)
        setService(params => params = { ...params, cart: { ...params.cart, selections: cartedRooms as [IRoom] } })
    }

    const _dummy_ = rooms

    return { cartRoom, addService, app, toggleCart, booking, activeRoom, _dummy_, setactiveRoom }
}


export default function Booking() {

    const { cartRoom, addService, app, toggleCart, booking, activeRoom, _dummy_, setactiveRoom } = useBooking()

    const Previews = () => {
        const swipper = useSwiper()
        return <ArrowLeft className='slider-button previous' onClick={() => swipper.slidePrev()} />
    }

    const Next = () => {
        const swipper = useSwiper()
        return <ArrowRight className='slider-button next' onClick={() => swipper.slideNext()} />
    }


    const canCart = (Boolean(booking?.adults_count) || Boolean(booking?.children_count)) &&
        (booking?.check_in as any >= new Date(activeRoom?.bookedTill as any).getTime()) &&
        (booking?.check_out as any >= new Date(booking?.check_in as any + 86400).getTime())


    return (
        <section className="section-container booking relative ">
            <h2 className="h2-headline uppercase">Book Now</h2>
            <p className="paragraph">
                Greetings! You will be residing in {'__LOCATION__'} for a brief period of time.
                <br />It is vital that your accommodations become a comfortable and welcoming abode for you.
            </p>
            <div className="booking-section">
                <Swiper
                    loop
                    className="rooms-display"
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    allowSlideNext
                    allowSlidePrev
                    pagination={{ clickable: true }}
                    onSwiper={(swipe: any) => console.log(swipe?.realIndex)}
                    onSlideChange={(swipe: any) => console.log(swipe?.realIndex, "   CHNAGED")}
                >
                    {/* setactiveRoom(swipe.el?.['data-main']) */}
                    {
                        _dummy_?.map((room: IRoom) => <SwiperSlide>
                            {({ isActive }) => (
                                <>
                                    {isActive && setactiveRoom(room)}
                                    <div className="card-img-wrapper relative">
                                        <img src={room?.photos?.[0]} alt="" loading="lazy" className="card-img" />
                                        <div className="floating-panel-top space-between">
                                            <FormControlLabel
                                                className="label-icon"
                                                control={<Photo />}
                                                label={(room?.photos as any)?.length}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </SwiperSlide>)
                    }
                    {/* <Previews />
                    <Next /> */}
                </Swiper>
                <div className="booking-calendar-contaner">
                    <div className="banner-bg-details">
                        <div className="space-between">
                            <h2 className="headline-h2 capitalize padding-none margin-none">{activeRoom?.title}</h2>
                            <div className="ratings">
                                <Rating
                                    readOnly
                                    value={mean(activeRoom?.rating as any)}
                                />
                            </div>
                        </div>
                        <p className="sub-headline capitalize">{activeRoom?.type}</p>
                        <p className="paragraph">{activeRoom?.description}</p>
                        <div className="space-between">
                            <div className="space-between">
                                {activeRoom?.features?.wifi && <Tooltip placement='top' title='Free Wifi'><Wifi className='feature-icon' /></Tooltip>}
                                {activeRoom?.features?.bars && <Tooltip placement='top' title='Bar'><Drafts className='feature-icon' /></Tooltip>}
                                {activeRoom?.features?.atmMachine && <Tooltip placement='top' title='ATM'><Atm className='feature-icon' /></Tooltip>}
                                {activeRoom?.features?.restaurant && <Tooltip placement='top' title='Restaurant'><Restaurant className='feature-icon' /></Tooltip>}
                                {activeRoom?.features?.swimmingPool && <Tooltip placement='top' title='Swimming Pool'><Water className='feature-icon' /></Tooltip>}
                                {activeRoom?.features?.spar && <Tooltip placement='top' title='Spa - Beauty'><Spa className='feature-icon' /></Tooltip>}
                            </div>
                            <span></span>
                        </div>
                        <hr className='hr-line' />
                        <div className="space-between">
                            <span className="price-display ">
                                ${fmtNumCompact(activeRoom?.price as any)}/{activeRoom?.term}
                            </span>
                            <FormControlLabel
                                control={<Radio
                                    readOnly
                                    checked={activeRoom?.bookedTill as any > Date.now()}
                                    style={{ color: activeRoom?.bookedTill as any > Date.now() ? 'red' : 'orange' }}
                                />}
                                label={timeFrom(activeRoom?.bookedTill as any)}
                            />
                        </div>

                        <div className="booking-vaiants">
                            <div className="space-between ">
                                <DatePicker
                                    className='date-picker'
                                    label="CHECK IN"
                                    closeOnSelect
                                    minDate={dayjs((activeRoom?.bookedTill ?? Date.now()) + 1500)}
                                    onChange={(check_in) => addService('check_in', activeRoom?.id, check_in)}
                                    value={dayjs(booking?.check_in)}
                                />
                                <DatePicker
                                    className='date-picker'
                                    closeOnSelect
                                    showDaysOutsideCurrentMonth
                                    minDate={dayjs((booking?.check_in ?? Date.now()) + 86400 * 1000)}
                                    label="CHECK OUT"
                                    onChange={(check_out) => addService('check_out', activeRoom?.id, check_out)}
                                    defaultValue={dayjs((activeRoom?.check_out ?? Date.now()) + 86400 * 1000)}
                                    value={dayjs(booking?.check_out) ?? ''}
                                />
                            </div>

                            <div className="individual-counter space-between">
                                <FormControl fullWidth className='date-picker'>
                                    <InputLabel id="demo-simple-select-label" className='date-picker'>Children</InputLabel>
                                    <Select
                                        disableUnderline
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={booking?.children_count}
                                        label="Children"
                                        className='date-picker'
                                        onChange={({ target }) => addService('children_count', activeRoom?.id, target?.value)}
                                    >
                                        <MenuItem value={1}>one</MenuItem>
                                        <MenuItem value={2}>Two</MenuItem>
                                        <MenuItem value={3}>Three</MenuItem>
                                        <MenuItem value={4}>Four</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth className='date-picker'>
                                    <InputLabel id="demo-simple-select-label" className='date-picker'>Adult`s`</InputLabel>
                                    <Select
                                        disableUnderline
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={booking?.adults_count}
                                        label="Adult`s`"
                                        className='date-picker'
                                        onChange={({ target }) => addService('adults_count', activeRoom?.id, target?.value)}
                                        defaultValue={2}
                                    >
                                        <MenuItem value={1}>one</MenuItem>
                                        <MenuItem value={2}>Two</MenuItem>
                                        <MenuItem value={3}>Three</MenuItem>
                                        <MenuItem value={4}>Four</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="space-between">
                            <Button
                                onClick={() => cartRoom(
                                    activeRoom as IRoom,
                                    activeRoom?.id,
                                    app?.cart?.selections?.filter((room: IRoom) => room?.id === activeRoom?.id).length > 0
                                )}
                                disabled={!canCart}
                                variant='contained'
                                className={`primary-button ${'primary-button'}`}
                            >
                                {app?.cart?.selections?.filter((room: IRoom) => room?.id === activeRoom?.id).length > 0 ? "Uncart" : "Add To Cart"}
                            </Button>
                            <Button
                                onClick={toggleCart}
                                disabled={app?.cart?.selections?.length < 1 || app?.cart?.isShowing}
                                variant='contained' className='primary-button'>
                                Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}
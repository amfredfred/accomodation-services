import { Download, Share } from '@mui/icons-material'
import '../../../Assets/stylesheet/checkout.css'
import { IRoom } from '../../../Constants/Interfaces'
import { fmtNumCompact, sum, sumCosts, timeFrom, timeLocalDate } from '../../../Helpers'
import { useBooking } from '../Booking'
import { Button, FormControlLabel, TextField } from '@mui/material'
import { useWindowSize } from 'usehooks-ts'

export default function Checkout() {

    const { app: { cart } } = useBooking()
    const { height, width } = useWindowSize()

    return (
        <div className="row  ">
            <div className="col-lg-8 ">
                {/* <p className="pb-2 fw-bold">Order</p> */}
                <div className="card">
                    {/* <div className="ribbon ribbon-top-right"><span>BOOKABLES!</span></div> */}
                    <div className="table-responsive ">
                        <table className="table table-borderless">
                            <tbody>
                                {
                                    cart?.selections?.map((room: IRoom, index: number) => {
                                        const { subT, subTotal } = sumCosts(room?.check_out, room?.check_in, room?.price)
                                        return (
                                            <tr className="border-bottom">
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <img className="pic" src={room?.photos?.[0]} alt="" />
                                                        </div>
                                                        <div className="ps-3 d-flex flex-column justify-content">
                                                            <a href='' className="ps-1 capitalize">{room?.title}, {room?.id}</a>
                                                            <small className=" d-flex">
                                                                <span className=" text-muted">Check In&nbsp;&nbsp;&nbsp;</span>
                                                                <span className=" fw-bold">&nbsp;{timeLocalDate(room?.check_in as any)}</span>
                                                            </small> <small className="">
                                                                <span className=" text-muted">Check Out</span>
                                                                <span className=" fw-bold">&nbsp;{timeLocalDate(room?.check_out as any)}</span>
                                                            </small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <p className="pe-3"><span className="red capitalize">${room?.price}/{room?.term}</span></p>
                                                        <p className="text-muted green">
                                                            {subT}{subT > 1 ? ' Nights' : ' Night'} At <span className='red'>${fmtNumCompact(subTotal)}</span> Cost
                                                        </p>
                                                    </div>
                                                </td>
                                                {/* <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="pe-3 text-muted">Days</span>
                                                        <span className="pe-3">{subT}</span>
                                                        <div className="round"> <span className=""> L </span> </div>
                                                    </div>
                                                </td> */}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 payment-summary">
                {width <= 600 ? <hr /> : ''}
                {/* <p className="fw-bold pt-lg-0 pt-4 pb-2">Payment Summary</p> */}
                <div className="card ">
                    <FormControlLabel
                        control={
                            <div className='text-input-container'>
                                <input
                                    className='text-input'
                                    placeholder='Receipt name'
                                />
                            </div>
                        }
                        labelPlacement='top'
                        label
                    />
                    <FormControlLabel
                        control={
                            <div className='text-input-container'>
                                <input
                                    className='text-input'
                                    placeholder='Phone number'
                                    type='tel'
                                />
                            </div>
                        }
                        labelPlacement='top'
                        label
                    />
                    <FormControlLabel
                        control={
                            <div className='text-input-container'>
                                <input
                                    type='email'
                                    className='text-input'
                                    placeholder='Email address'
                                />
                            </div>
                        }
                        labelPlacement='top'
                        label
                    />
                    <FormControlLabel
                        control={
                            <div className='text-input-container'>
                                <textarea
                                    className='text-input'
                                    placeholder='Additional instruction'
                                />
                            </div>
                        }
                        labelPlacement='top'
                        label
                    />
                    <br />
                </div>
                <hr />

                <div className="card px-md-3 px-2 pt-4">
                    <div className="d-flex justify-content-between pb-3">
                        <span className="text-muted">BOOKING ID</span>
                        &nbsp;
                        <p className="text-muted link-color">BOOKING-{String(Math.random() * 10).split('.')[1].slice(0, 7)}</p>
                    </div>
                    <div className="space-between" style={{
                        width: '100%',
                        background: 'var(--box-background-color)',
                        borderRadius: 10,
                        overflow: 'hidden',
                        paddingLeft: 10
                    }}>
                        <div className='text-input-container plain' >
                            <input
                                className='text-input'
                                placeholder='COUPON CODE'
                            />
                        </div>
                        <Button >
                            Apply
                        </Button>
                    </div>
                    <br />
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between pb-3">
                            <span className="text-muted">ADDITIONAL SEERVICE</span>
                            &nbsp;
                            <p className="text-muted link-color">$0.00</p>
                        </div>
                        <div className="d-flex justify-content-between pb-3">
                            <span className="text-muted">TAX</span>
                            &nbsp;
                            <p className="text-muted link-color">$0.00</p>
                        </div>
                        <div className="d-flex justify-content-between pb-3">
                            <span className="text-muted">TOTAL AMOUNT</span>
                            &nbsp;
                            <p className="text-muted link-color">
                                ${fmtNumCompact(sum(cart?.selections?.map((sub: IRoom) => Number(sub?.subTotal))))}
                            </p>
                        </div>
                    </div>
                    <br />
                </div>
                <hr />
                <div className="space-between">
                    <Button   >
                        Make Payment
                    </Button>
                    <div className="space-between">
                        <FormControlLabel
                            label=' downlaod'
                            control=<Download />
                        />
                        <FormControlLabel
                            label=' share'
                            control=<Share />
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
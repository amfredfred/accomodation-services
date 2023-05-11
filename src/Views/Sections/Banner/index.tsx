import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { motion } from 'framer-motion'
import { rooms } from '../../../__dummy__';
import { IRoom } from '../../../Constants/Interfaces';
import { ArrowLeft, ArrowRight, Wifi } from "@mui/icons-material";
import { Button } from '@mui/material';

export default function BannerArea() {
    const _dummy_ = rooms

    const SlideButtons = () => {
        const swipper = useSwiper()
        return (
            <div className="slider-buttons">
                <ArrowLeft className='slider-button' onClick={() => swipper.slidePrev()} />
                <ArrowRight className='slider-button' onClick={() => swipper.slideNext()} />
            </div>
        );
    }

    return (
        <section className="section-container relative">
            {/* <h2 className="h2-headline uppercase welcome-text">welcome to {" APP NAME "}</h2> */}
            <div className="banner-bg-slides">
                <Swiper
                    className='banner-area-swiper'
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay
                    allowSlideNext
                    allowSlidePrev
                    touchEventsTarget='container'
                    mousewheel
                    loop
                >
                    {
                        _dummy_?.map((room: IRoom) => <SwiperSlide key={room?.id}>
                            <div className="banner-bg-slide" >
                                <div className="banner-bg-image-wrapper">
                                    <img src={room?.photos?.[0]} className="background-cover" />
                                    {room?.photos?.map(photo => <motion.img
                                        initial={{ opacity: 0, }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: .3, duration: .7 }}
                                        loading='lazy'
                                        className='banner-bg-img'
                                        src={photo} alt="" />)
                                    }
                                </div>
                                <div className="banner-bg-details">
                                    <h2 className="headline-h2 capitalize padding-none margin-none">{room?.title}</h2>
                                    <p className="sub-headline capitalize">{room?.type}</p>
                                    <p className="paragraph">{room?.description}</p>
                                    <div className="space-between">
                                        <Wifi />
                                    </div>
                                    <hr className='hr-line' />
                                    <span className="price-display">
                                        ${room?.price}/{room?.term}
                                    </span>
                                    <Button variant='contained' className='primary-button'>
                                        CHECK AVAIABILITY
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        )
                    }
                    <SlideButtons />
                </Swiper>
            </div>
        </section>
    )
}
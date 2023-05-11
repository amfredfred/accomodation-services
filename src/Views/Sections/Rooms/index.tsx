import { IRoom } from "../../../Constants/Interfaces"
import { rooms } from "../../../__dummy__"
import RoomCard from "../../Components/Cards/Room"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from 'usehooks-ts'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


export default function Rooms() {

    const _dummy_ = rooms
    const { height, width } = useWindowSize()

    return (
        <section className="section-container rooms relative ">
            <h2 className="h2-headline uppercase"> Rooms</h2>
            <p className="paragraph">
                Our accommodations offer an exceptional staycation experience.
                <br />Select your preferred room and begin your staycation!
            </p>
            <br />
            <br />
            <Swiper
                slidesPerView={width > 1000 ? 3.6 : width <= 999 && width > 860 ? 3 : width <= 860 && width > 680 ? 2 : 1}
                className="rooms-slide-contaner"
                spaceBetween={20}
                allowSlideNext
                allowSlidePrev
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
               
            >
                {
                    _dummy_?.map((room: IRoom) =>
                        <SwiperSlide >
                            <RoomCard {...room} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    )
}
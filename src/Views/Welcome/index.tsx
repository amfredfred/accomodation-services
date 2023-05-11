import AboutUs from "../Sections/AboutUs"
import BannerArea from "../Sections/Banner"
import Booking from "../Sections/Booking"
import Rooms from "../Sections/Rooms"

export default function Welcome() {
    return (
        <div className="page-content">
            <BannerArea />
            <Rooms />
            <Booking />
            {/* <AboutUs /> */}
        </div>
    )
}
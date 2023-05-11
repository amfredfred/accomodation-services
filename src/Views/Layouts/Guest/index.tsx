import { ILayouts } from "../../../Constants/Interfaces";
// import Footing from "../Patials/Footing";
import Heading from "../Patials/Heading";
// import Navigation from "../Patials/Navigation";

export default function GuestLayout(props: ILayouts) {
    const { children } = props
    return (
        <div className="layout-master" >
            {/* <Navigation /> */}
            <div className="layout-contents">
                <div className="scroll-pattern">
                    <Heading />
                    <div className="contents">
                        {children}
                    </div>
                    {/* <Footing /> */}
                </div>
            </div>
        </div >
    )
}
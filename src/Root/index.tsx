import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../Views/Welcome";
import { useLocalStorage } from 'usehooks-ts';
import { AccomodationServices, IAccomodationServices } from '../Constants/Interfaces';
import HomeLayout from "../Views/Layouts/Home";
import GuestLayout from "../Views/Layouts/Guest";
import Cart from "../Views/Components/Cart";

export default function Root() {
    const [app, setApp] = useLocalStorage<IAccomodationServices>('@AccomodationServices', AccomodationServices)

    const Authenticated = (
        <HomeLayout>
            <Routes>
                <Route path="/" element={<Welcome />} />
            </Routes>
        </HomeLayout>
    )

    const Guest = (
        <GuestLayout>
            <Routes>
                <Route path="/" element={<Welcome />} />
            </Routes>
        </GuestLayout>
    )

    return (
        <BrowserRouter>
            {app?.user?.isAuthenticated ? Authenticated : Guest}
            <Cart />
        </BrowserRouter >
    )
}
import { BrowserRouter, Routes, Route } from "react-router"
import * as Page from "#/pages"
import ProtectRoute from "./protect-route"

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page.Home />} />
                <Route path="/property/:slug" element={<Page.PropertyDetail />} />
                <Route path="/property/booking/:id" element={<Page.PropertyBooking />} />
                <Route path="/admin/signin" element={<Page.SignIn />} />

                <Route path="/admin" element={<ProtectRoute />}>
                    <Route path="property" element={<Page.Property />} />
                    <Route path="booking" element={<Page.Booking />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
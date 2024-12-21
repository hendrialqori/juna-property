import { BrowserRouter, Routes, Route } from "react-router"
import * as Page from "#/pages"

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page.Home />} />
                <Route path="/property/:slug" element={<Page.PropertyDetail />} />
            </Routes>
        </BrowserRouter>
    )
}
import { lazy } from "react";

export const Home = lazy(() => import("#/pages/home"))
export const PropertyDetail = lazy(() => import("#/pages/property-detail"))
export const PropertyBooking = lazy(() => import("#/pages/property-booking"))
export const SignIn = lazy(() => import("#/pages/sign-in"))

export const Property = lazy(() => import("#/pages/[admin] property"))
export const Booking = lazy(() => import("#/pages/[admin] booking"))

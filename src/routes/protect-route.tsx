import { Outlet } from "react-router";
// import { TOKEN } from "#/constant";

export default function ProtectRoute() {

    // const token = window.localStorage.getItem(TOKEN) ?? ""

    // if (!token) return <Navigate to={{ pathname: "/admin/sign-in" }} />

    return <Outlet />
}
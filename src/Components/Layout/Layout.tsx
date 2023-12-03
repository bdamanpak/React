import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="max-h-xl bg-gray-100 max-w-2xl mx-auto p-5 rounded-2xl mt-10">
            <div className="flex justify-between mx-auto max-w-xs pb-4">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/auth/homepage">Homepage</Link>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
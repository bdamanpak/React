import { Link, Outlet, useNavigate } from "react-router-dom"
import  Cookies  from 'js-cookie';
import { useEffect } from "react";

export const PrivateLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!Cookies.get('token')){
            navigate("/login")
        }
    }, [])

    return(
        <div className="max-h-xl bg-gray-100 max-w-2xl mx-auto p-5 rounded-2xl mt-10">
            <div className="flex justify-center mx-auto max-w-xs pb-4">
                <Link to="/auth/homepage">Homepage</Link>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
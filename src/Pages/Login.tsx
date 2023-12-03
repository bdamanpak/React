import { useForm } from "react-hook-form"
import { Button } from "../Components/Button/Button"
import { Textfield } from "../Components/Textfield/Textfield"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";

interface Login {
    email: string;
    password: string;
};

export const Login = () => {
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    const schema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required()
    });
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});
    return(
        <div>
            <form onSubmit={handleSubmit(async (data) => {
                setIsLoading(true);
                const res = await axios.post("https://reqres.in/api/login", data);
                Cookies.set("token", res.data.token, { expires: 10 });
                navigate("/auth/homepage")
                setIsLoading(false);
            })}>
                <Textfield  label="Enter Your Email" type="email" placeholder="example@gmail.com" validation={register("email")} helpertext={errors.email?.message}/>
                <Textfield  label="Enter Your Password" type="password" placeholder="*********"  validation={register("password")} helpertext={errors.password?.message}/>
                <Button>{isLoading ? '...' : 'Login'}</Button>
            </form>
        </div>
    )
}
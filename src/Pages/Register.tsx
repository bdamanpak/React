import React from "react"
import { Textfield } from '../Components/Textfield/Textfield';
import { Checkbox } from "../Components/Checkbox/Checkbox";
import { Button } from "../Components/Button/Button";
import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
        fullName: yup.string().required(),
        email: yup.string().required().email(),
        gender: yup.string().required(),
        address: yup.string().required(),
        phone: yup.string().required(),
        password: yup.string().required(),
        repeatPassword: yup.string().required().min(4)
    })
    .required()


export const Register = () => {
    const { handleSubmit, register, formState: {errors} } = useForm({resolver: yupResolver(schema)});
    const [user, setUser] = React.useState({
        fullName: "",
        email: "",
        gender: "",
        address: "",
        phoneNumber: "",
        password: "",
        repeatPassword: ""
    });
    return (
        <>
            <form onSubmit={ handleSubmit((data) => {
                 console.log(data);
            })}
            className="max-w-sm mx-auto">
                <Textfield onBlur={(e) => {
                    setUser((prevState) => {
                        return {
                            ...prevState,
                            fullName: e.target.value  
                        }
                    })
                }} label="Your Name" placeholder="Bardia Damanpak" helpertext={errors.fullName?.message}
                    validation={register('fullName')}
                />
                <Textfield onBlur={(e) => {
                    setUser((prevState) => {
                        return {
                            ...prevState,
                            email: e.target.value
                        }
                    })
                }} type="email" label="Your Email" placeholder="bardia.damanpak@yahoo.com" helpertext={errors.email?.message}
                validation={register('email')}

                />
                <Textfield onBlur={(e) => {
                    setUser((prevState) => {
                        return {
                            ...prevState,
                            gender: e.target.value
                        }
                    })
                }} label="Your Gender" placeholder="Male | Female" helpertext={errors.gender?.message}
                validation={register('gender')}
                />
                <Textfield onBlur={(e) => {
                    setUser((prevState) => {
                        return {
                            ...prevState,
                            address: e.target.value
                        }
                    })
                }} label="Your Address" placeholder="Iran, Shiraz" helpertext={errors.address?.message}
                validation={register('address')}
                />
                <Textfield onBlur={(e) => {
                    setUser((prevState) => {
                        return {
                            ...prevState,
                            phoneNumber: e.target.value
                        }
                    })
                }} label="Your Phone Number" placeholder="09173024786" helpertext={errors.phone?.message}
                validation={register('phone')}
                />
                <Textfield onBlur={(e) => {
                    setUser((prevState) => {
                        return {
                            ...prevState,
                            password: e.target.value
                        }
                    })
                }} type="password" label="Your Password" placeholder="************" helpertext={errors.password?.message}
                validation={register('password')}
                />
                <Textfield onBlur={(e) => {
                    setUser((prevState) => {
                        return {
                            ...prevState,
                            email: e.target.value
                        }
                    })
                }} type="password" label="Your Repeated Passsword" placeholder="************" helpertext={errors.repeatPassword?.message}
                validation={register('repeatPassword')}
                />
                <Checkbox />
                <Button onClick={() => {
                    const prevUsers = localStorage.getItem('users');
                    const parsedPrevUsers = prevUsers ? JSON.parse(prevUsers) : [];
                    const updatedUsers = [...parsedPrevUsers, user];
                    localStorage.setItem('users', JSON.stringify(updatedUsers));
                }}>Register</Button>
            </form>
        </>
    )
}


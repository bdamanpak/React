import { useForm } from "react-hook-form";
import { Button } from "../Components/Button/Button"
import { Textfield } from "../Components/Textfield/Textfield"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export interface UserSchema {
    name: string;
    phone: string;
    age: string;
    id?: string;
};

const schema = yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    age: yup.string().required()
});


export const Homepage = () => {
    const [users, setUsers] = useState<UserSchema[]>([]);
    const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

    const handleCreateUser = (data: UserSchema) => {
        const user = {
            id: uuidv4(),
            ...data
        };
        setUsers((prevState) => [...prevState, user]);
    }
    const handleDeleteUser = (id: string) => {
        setUsers(prevState => prevState.filter(user => user.id !== id));
    };

    const myUsers = users.map((u: UserSchema) => {
        return(
            <div key={u.id} className="flex justify-start align-middle items-center gap-10 p-5 border border-blue-500 rounded-xl text-xl text-blue-700 my-4">
                <h2>{u.name}</h2>
                <h3>{u.phone}</h3>
                <h4>{u.age}</h4>
                <Button onClick={() => handleDeleteUser(u.id!)}>Delete</Button>
            </div>
        )
    })
    return (
        <div className="flex flex-col gap-10">
            <div>
                <h1 className="pb-3 text-xl text-blue-800">ADD USER</h1>
                <form onSubmit={handleSubmit(handleCreateUser)}>
                    <Textfield label="Enter Name" type="text" placeholder="Bardia Damanpak" validation={register("name")} />
                    <Textfield label="Enter Phone" type="text" placeholder="09173024786" validation={register("phone")} />
                    <Textfield label="Enter Age" type="text" placeholder="26" validation={register("age")} />
                    <Button>Add User</Button>
                </form>
            </div>
            <div>
                <h1 className="text-xl text-blue-800">USERS</h1>
                {myUsers}
            </div>
        </div>
    )
};
"use client"
import clsx from "clsx"
import { useSession } from "next-auth/react"
import { useForm } from "react-hook-form"
import { FormAvatar } from "../FormAvatar/FormAvatar"

export function UploadAvatar({session}){
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
        setValue,
    } = useForm();

    const onSubmitAvatar = handleSubmit((data) => {
        console.log(data)
    })

    return(
        <div>
            <div className="m-6 text-sm text-center font-body text-regular">
            <p>Elige tu fotografía de perfil.</p>
            <p>Tu archivo debe der un png, jpg, o jpeg</p>
            </div>
            <FormAvatar 
            onSubmitAvatar={onSubmitAvatar}
            register = {register}
            errors = {errors}
            setValue = {setValue}
            watch = {watch}
            session= {session}
            />
        </div>
    )
}
"use client"
import clsx from "clsx"
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {FormEditProfile} from "@/components/editProfile/FormEditProfile/FormEditProfile"

export function EditProfile({ user }){
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
        setValue,
    } = useForm();

    // const onSumbitProfile = handleSubmit((data) => {
    //     console.log("Hola")
        
    // })

    return(
        <div>
            <p className={clsx("m-6", "text-sm")}>
                Completa los espacios pendientes para completar tu perfil.
            </p>
            {/* <FormEditProfile 
                onSumbitProfile={onSumbitProfile}
                register={register}
                errors={errors}
                watch={watch}
                setValue={setValue}
                user={user}
                /> */}
        </div>
    )
}
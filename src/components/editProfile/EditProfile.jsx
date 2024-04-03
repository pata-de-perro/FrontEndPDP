"use client"
import clsx from "clsx"
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {FormEditProfile} from "@/components/editProfile/FormEditProfile"

export function EditProfile({params}){
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
        setValue,
    } = useForm();

    const onSumbitProfile = handleSubmit((data) => {
        console.log(data)
    })

    return(
        <div>
            <p className={clsx("m-6", "text-sm")}>
                A continuación puedes ver la información que tenemos almacenada, completa los espacios pendientes para completar tu perfil.
            </p>
            <FormEditProfile 
            register={register}
            onSumbitProfile={onSumbitProfile}
            errors={errors}
            watch={watch}
            setValue={setValue}
            />
        </div>
    )
}
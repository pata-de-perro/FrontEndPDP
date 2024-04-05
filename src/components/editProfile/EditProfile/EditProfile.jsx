"use client"
import clsx from "clsx"
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormEditProfile } from "../FormEditProfile/FormEditProfile";
import { updateProfileApi } from "@/services";

export function EditProfile({ profile, token }){
    const { _id } = profile
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
        setValue,
    } = useForm();

    const onSumbitProfile = handleSubmit(async (data) => {
        const result = await updateProfileApi(profile)
    })

    return(
        <div>
            <p className={clsx("m-6", "text-sm")}>
                Completa los espacios pendientes para completar tu perfil.
            </p>
            <FormEditProfile 
                onSumbitProfile={onSumbitProfile}
                register={register}
                errors={errors}
                profile={profile}
                loading={loading}
                />
        </div>
    )
}
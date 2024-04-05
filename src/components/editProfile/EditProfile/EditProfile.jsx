
import clsx from "clsx"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormEditProfile } from "../FormEditProfile/FormEditProfile";
import { updateProfileApi } from "@/services";

export function EditProfile({ profileData, token }){
    const profile = profileData
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({defaultValues:
    {
        name:profile?.name,
        email:profile?.email,
        phoneNumber: profile?.phoneNumber,
        birthdate: profile?.birthdate,
        gender: profile?.gender,
    }});

    // const router = useRouter()

    const onSumbitProfile = handleSubmit(async (data) => {
        delete data.email
        const infoProfile = {
            ...data,
            userId: profile._id
        };
        const result = await updateProfileApi(
            infoProfile,
            token,
        );
        if (result?.success === true) {
            reset()
            router.push("/pdp/profile")
        }
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
                />
        </div>
    )
}
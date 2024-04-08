
import clsx from "clsx"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormEditProfile } from "../FormEditProfile/FormEditProfile";
import { updateProfileApi } from "@/services";
import { parsedUTCToLocalDateString } from "@/helpers"

export function EditProfile({ profileData, handleCloseEditModal, token }){

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({defaultValues:
    {
        name:profileData?.name,
        phoneNumber: profileData?.phoneNumber,
        birthdate: parsedUTCToLocalDateString(profileData?.birthdate),
        gender: profileData?.gender,
    }});

    const router = useRouter()

    const onSumbitProfile = handleSubmit(async (data) => {
        console.log(data.birthdate.slice(0,10))
        const infoProfile = {
            ...data,
            userId: profileData._id
        };
        const result = await updateProfileApi(
            infoProfile,
            token,
        );
        if (result?.success === true) {
            handleCloseEditModal();
            router.push(`/pdp/profile`);
            router.refresh();
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
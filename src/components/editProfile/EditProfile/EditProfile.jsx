import clsx from "clsx"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormEditProfile } from "../FormEditProfile/FormEditProfile";
import { updateProfileApi } from "@/services";
import { birthdayProfileForm } from "@/helpers"

export function EditProfile({ profileData, handleCloseEditModal, token }){
    const birthday = birthdayProfileForm(profileData?.birthdate)
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({defaultValues:
    {
        name:profileData?.name,
        phoneNumber: profileData?.phoneNumber,
        birthdate: birthday,
        gender: profileData?.gender,
    }});
    const router = useRouter()
    const onSumbitProfile = handleSubmit(async (data) => {       
        const result = await updateProfileApi(
            profileData._id,
            data,
            token,
        );
        if (result?.success === true) {
            router.refresh();
            handleCloseEditModal();
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
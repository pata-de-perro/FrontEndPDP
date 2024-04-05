import { useForm } from "react-hook-form"
import { FormAvatar } from "../FormAvatar/FormAvatar";

export function UploadAvatar({session}){
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmitAvatar = handleSubmit( async (data) => {
               const infoProfile = {
                       ...data,
                       userId: profile._id
                   };
                   const result = await updateProfileApi(
                       infoProfile,
                       token,
                   );
                   if (result.success === true) {
                       reset()
                       router.push("/pdp/profile")
                   }
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
            />
        </div>
    )
}
import clsx from "clsx";
import { useForm } from "react-hook-form";

import { FormInvite }from "@/app/components/sendInvite/FormInvite"


export function CreateInvite() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onSubmitInvite = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <p className={clsx("m-6", "text-center text-sm")}>
        Ingresa el correo electrónico de la pesona a quien quieras invitar a tu evento
      </p>
      <FormInvite 
      register={register}
      onSubmitFriend={onSubmitInvite}
      errors={errors}
      watch={watch}
      setValue={setValue}
      />
    </div>
  );
}

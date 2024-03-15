import { useForm } from "react-hook-form";
import { postCreateNewUserApi } from "@/services";
import { FormRegister } from "@/app/components/account";

export function CreateRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const onSubmitRegister = handleSubmit(async (data) => {
    console.log(data);
    const result = await postCreateNewUserApi(data);
    console.log(result);
  });

  console.log(errors);

  return (
    <FormRegister
      onSubmitRegister={onSubmitRegister}
      register={register}
      errors={errors}
      watch={watch}
    />
  );
}

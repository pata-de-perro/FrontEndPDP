import { useForm } from "react-hook-form";
import { postLoginApi } from "@/services";
import { FormLogin } from "@/app/components/account";

export function PerformLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const onSubmitSignIn = handleSubmit(async (data) => {
    console.log(data);
    const result = await postLoginApi(data);
    console.log(result);
  });

  console.log(errors);

  return (
    <FormLogin
      onSubmitSignIn={onSubmitSignIn}
      register={register}
      errors={errors}
      watch={watch}
    />
  );
}

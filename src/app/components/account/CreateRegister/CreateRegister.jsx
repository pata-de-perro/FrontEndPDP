import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const onSubmitRegister = handleSubmit(async (data) => {
    const result = await postCreateNewUserApi(data);
    if (result?.success === true) {
      router.push("/account/login");
      reset();
    }
  });

  return (
    <FormRegister
      onSubmitRegister={onSubmitRegister}
      register={register}
      errors={errors}
      watch={watch}
    />
  );
}

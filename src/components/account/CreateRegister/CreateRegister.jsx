"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useConsumeApi } from "@/components/hooks";
import { postCreateNewUserApi } from "@/services";
import { FormRegister } from "@/components/account";

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
  const { loading, handleConsumeApi } = useConsumeApi();
  const router = useRouter();

  const onSubmitRegister = handleSubmit(async (data) => {
    const result = await handleConsumeApi(postCreateNewUserApi, data);
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
      loading={loading}
    />
  );
}

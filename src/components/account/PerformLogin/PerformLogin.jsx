"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useNextAuthApi } from "@/components/hooks";
import { FormLogin } from "@/components/account";

export function PerformLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
  });
  const { loading, handleAuthApi } = useNextAuthApi();
  const router = useRouter();

  const onSubmitSignIn = handleSubmit(async (data) => {
    const result = await handleAuthApi(data);
    if (result?.ok === true) {
      reset();
      router.push("/pdp");
    }
  });

  return (
    <FormLogin
      onSubmitSignIn={onSubmitSignIn}
      register={register}
      errors={errors}
      loading={loading}
    />
  );
}

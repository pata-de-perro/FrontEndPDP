"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useNextAuthApi } from "@/components/hooks";
import { FormLogin } from "@/components/account";
import { ToastMsgTop } from "@/components/common";

export function PerformLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
  });
  const { loading, error, handleAuthApi } = useNextAuthApi();
  const router = useRouter();

  const onSubmitSignIn = handleSubmit(async (data) => {
    const result = await handleAuthApi(data);
    if (result?.ok === true) {
      router.push("/pdp");
      reset();
    }
  });

  return (
    <>
      {error && <ToastMsgTop message={error} type="error" />}
      <FormLogin
        onSubmitSignIn={onSubmitSignIn}
        register={register}
        errors={errors}
        loading={loading}
      />
    </>
  );
}

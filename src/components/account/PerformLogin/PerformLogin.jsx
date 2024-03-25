"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { FormLogin } from "@/components/account";

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
  const router = useRouter();

  const onSubmitSignIn = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      console.log(res.error);
    } else {
      router.push("/pdp");
      reset();
    }
  });

  return (
    <FormLogin
      onSubmitSignIn={onSubmitSignIn}
      register={register}
      errors={errors}
      watch={watch}
    />
  );
}

"use client";
import Swal from "sweetalert2";
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
      Swal.fire({
        position: "top-end",
        title: "¡Sesión Iniciada con èxito!",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          title: "text-xl text-accent2 font-heading",
          popup: "bg-accent1",
        },
      });
      router.push("/pdp");
      reset();
    } else {
      Swal.fire({
        position: "top-end",
        title: "¡Credenciales incorrectas",
        showConfirmButton: false,
        timer: 2500,
        customClass: {
          title: "text-xl text-accent2 font-heading",
          popup: "bg-red-200",
        },
      });
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

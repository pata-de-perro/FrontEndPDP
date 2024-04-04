"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useConsumeApi } from "@/components/hooks";
import { postCreateNewUserApi } from "@/services";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import clsx from "clsx";
import { BtnSubmit } from "@/components/common";

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
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const { loading, handleConsumeApi } = useConsumeApi();
  const router = useRouter();

  const reCaptcha = useRef()
  
  const [ tokenCaptchaData, setTokenCaptchaData ] = useState()

  const onChange = (_token ) => {
    setTokenCaptchaData(_token)
  }
  const onSubmitRegister = handleSubmit(async (data) => {

    data.tokenCaptcha = tokenCaptchaData

    const result = await handleConsumeApi(postCreateNewUserApi, data);

    if (result?.success === true) {
      router.push("/account/login");
      reset();
    }
  });

  return (
    <form onSubmit={onSubmitRegister}>
      <div className="form-control">
        <label className="label font-body text-regularSemiBold">Correo electrónico</label>
        <input
          type="email"
          className={clsx(
            "px-3 py-2 h-[50px]",
            "bg-white border shadow-sm border-slate-300",
            "placeholder-slate-400",
            "block w-[450px] rounded-lg focus:ring-1",
            "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
          )}
          placeholder="Correo electrónico"
          {...register("email", {
            required: {
              value: true,
              message: "Tu correo electrónico es requerido",
            },
            pattern: {
              value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            },
          })}
        />
        {errors.email && (
          <span className="text-regular font-body text-red-500 ml-[5px]">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="form-control">
        <label className="label font-body text-regularSemiBold">Contraseña</label>
        <input
          type="password"
          className={clsx(
            "px-3",
            "bg-white",
            "border shadow-sm border-slate-300",
            "placeholder-slate-400",
            "focus:outline-none focus:border-sky-45 focus:ring-sky-500",
            "block w-[450px] h-[50px] rounded-lg focus:ring-1"
          )}
          placeholder="Contraseña"
          {...register("password", {
            required: {
              value: true,
              message: "Es requerida tu contraseña",
            },
            pattern: {
              value:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
              message:
                "La contraseña debe tener al menos 8 caracteres: Letras minúsculas(a-z), letras mayúsculas (A-Z), números (0-9) y al menos uno de los siguientes carácteres especiales #?!@$ %^&*-",
            },
          })}
        />
        {errors.password && (
          <span className="text-regular font-body text-red-500 ml-[5px] w-[450px]">
            {errors.password.message}
          </span>
        )}
        {errors.pattern && (
        <span className="text-regular font-body text-red-500 ml-[5px] w-[450px]">
          {errors.pattern.message}
          </span>)}
      </div>
      <div className="form-control">
        <label className="label font-body text-regularSemiBold">Confirma tu contraseña</label>
        <input
          type="password"
          className={clsx(
            "px-3",
            "bg-white",
            "border shadow-sm border-slate-300",
            "placeholder-slate-400",
            "focus:outline-none focus:border-sky-45 focus:ring-sky-500",
            "block w-[450px] h-[50px] rounded-lg focus:ring-1"
          )}
          placeholder="Confirma tu contraseña"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Es necesario confirmar la contraseña",
            },
            validate: (value) => {
              if (value === watch("password")) {
                return true;
              } else {
                return "Las contraseñas no coinciden. Verifica su escritura";
              }
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="text-regular font-body text-red-500 ml-[5px]">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
      <div className="form-control mt-6">
        <ReCAPTCHA
          ref={reCaptcha}
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={onChange}
          onExpired={ e => setTokenCaptchaData("")}
        />
      </div>
      
      <div className="form-control">
        <BtnSubmit title="Registrarse" loading={loading} />
      </div>
    </form>
  );
}

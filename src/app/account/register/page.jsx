"use client";

import clsx from "clsx";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: "onTouched",
  });

  return (
    <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-1">
          <p className="text-h1 font-heading text-center text-azulGris900 pt-[15px]">
            Regístrate en
          </p>
          <Link href="/">
            <img
              src="/dePataDePerroLogo.svg"
              width={200}
              height={35}
              alt="Logo Pata de Perro"
              className="lg:w-[420px] lg:h-[auto]"
            />
          </Link>
        </div>
        <p className="text-regular font-body text-center text-azulGris900">
          ¿Ya eres usuario?
        </p>
        <p className="text-regularBold font-body text-center text-azulGris900">
          <Link href="/login">¡Inicia sesión ahora!</Link>
        </p>

        {/* We will work on the google login if we got time */}

        {/* <button
          className={clsx(
            "border border-azulGris600",
            "w-[300px] p-[15px] my-[15px]",
            "flex justify-center",
            "items-center",
            "rounded-lg"
          )}
        >
          <img src="/Google.svg" width={25} height={25} alt="Google logo" />
          <p className="font-body text-regularSemiBold">Continuar con Google</p>
        </button>
        <div className="flex justify-center items-center m-[15px]">
          <p className="px-[10px]">----</p>
          <p className="text-regular font-body text-center text-azulGris900 w-[200px] md:w-[250px]">
            O registrate con tu correo electrónico
          </p>
          <p className="px-[10px]">----</p>
        </div> */}
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            onerror

            reset()
          })}
        >
          <div>
            <label
              className={clsx(
                "text-regular font-body text-azulGris800",
                "bg-appBackground",
                "z-10 justify-self-start ml-[15px] mt-[15px]"
              )}
            >
              Correo electrónico
            </label>
            <input
              type="email"
              className={clsx(
                "mt-1 px-3 py-2",
                "h-[50px]",
                "bg-white",
                "border shadow-sm border-slate-300",
                "placeholder-slate-400",
                "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
                "block w-[450px] rounded-lg focus:ring-1"
              )}
              placeholder="Correo electrónico"
              {...register("email", {
                required: {
                  value:true,
                  message:"Tu correo electrónico es requerido",
                },
                pattern:{
                  value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                }
              })}
            />
            {errors.email && (
              <span className="text-regular font-body text-red-500 ml-[15px]">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              className={clsx(
                "text-regular font-body text-azulGris800",
                "bg-appBackground",
                "z-10 justify-self-start ml-[15px] mt-[15px]"
              )}
            >
              Contraseña
            </label>
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
                  message:"Es requerida tu contraseña",
                },
                pattern:{
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                  message:"La contraseña debe tener entre 8 y 30 caracteres y solo puede incluir letras, números y los puedes utilizar los siguientes carcteres especiales #?!@$ %^&*-",
                }
              })}
            />
            {errors.password && (
              <span className="text-regular font-body text-red-500 ml-[15px]">
                {errors.password.message}
              </span>
            )}
            {
              errors.pattern && (
                <span>{errors.pattern.message}</span>
              )
            }
          </div>
          <div>
            <label
              className={clsx(
                "text-regular font-body text-azulGris800",
                "bg-appBackground",
                "z-10 justify-self-start ml-[15px] mt-[15px]"
              )}
            >
              Confirma tu contraseña
            </label>
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
                  if (value === watch('password')){
                    return true
                  } else {
                    return 'Las contraseñas no coinciden. Verifica su escritura'
                  }
                }
              })}
            />
            {errors.confirmPassword && (
              <span className="text-regular font-body text-red-500 ml-[15px]">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div>
            <div className="mt-4">
            <input
              type="checkbox"
              {...register("termsAndConditions", {
                required: {
                  value: true,
                  message: "Es necesario que aceptes los términos y condiciones.",
                },
              })}
              className="mr-2"
            ></input>
            <label className={clsx(
                "text-regular font-body text-azulGris800",
                "justify-self-start ml-[5px] mt-[15px]"
              )}
            >Acepto términos y condiciones</label>
            </div>
            {errors.termsAndConditions && (
              <span className="text-regular font-body text-red-500 ml-[15px]">
                {errors.termsAndConditions.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className={clsx(
              "bg-azulGris100",
              "text-azulGris400 text-regular",
              "px-[8px] py-[8px]",
              "mb-[15px] mt-[60px]",
              "w-[450px]",
              "rounded-md",
              "flex justify-center",
              "bg-primary text-white ",
              "hover:bg-accent1 hover:text-accent2",
            )}

          >
            Enviar
          </button>
        </form>
    </div>
  );
}

"use client";
import { clsx } from "clsx";
import { BtnSubmit } from "@/components/common";

export function FormLogin({ onSubmitSignIn, register, errors, loading }) {

  return (
    <form onSubmit={onSubmitSignIn} className={clsx(
      "w-[380px] flex flex-wrap justify-center",
      "md:flex-col md:flex-nowrap"
    )}>
      <div className="form-control">
        <label className="label font-body text-regularSemiBold">Correo electrónico</label>
        <input
          type="email"
          className={clsx(
            "mt-1 px-3 py-2",
            "h-[50px] w-[350px]",
            "md:w-[410px]",
            "bg-white",
            "border shadow-sm border-slate-300",
            "placeholder-slate-400",
            "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
            "block rounded-lg focus:ring-1"
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
          <span
            className={clsx("text-regular font-body text-red-500", "ml-[5px]")}
          >
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
            "md:w-[410px]",
            "border shadow-sm border-slate-300",
            "placeholder-slate-400",
            "focus:outline-none focus:border-sky-45 focus:ring-sky-500",
            "block w-[350px] h-[50px] rounded-lg focus:ring-1"
          )}
          placeholder="Contraseña"
          {...register("password", {
            required: {
              value: true,
              message: "Es requerida tu contraseña",
            },
          })}
        />
        {errors.password && (
          <span className="text-regular font-body text-red-500 ml-[5px]">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="form-control">
        <BtnSubmit title="Iniciar Sesión" loading={loading} 
        onClick={() => {
          const values = getValues()
        }
        } />
      </div>
    </form>
  );
}

import Link from "next/link";
import { clsx } from "clsx";
import { BtnSubmit } from "@/components/common";

export function FormLogin({ onSubmitSignIn, register, errors, loading }) {
  return (
    <form onSubmit={onSubmitSignIn}>
      <div className="form-control">
        <label className="label">Correo electrónico</label>
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
        <label className="label">Contraseña</label>
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
          })}
        />
        {errors.password && (
          <span className="text-regular font-body text-red-500 ml-[5px]">
            {errors.password.message}
          </span>
        )}
      </div>
      {/* <div className="form-control">
        <span
          className={clsx(
            "text-link font-body",
            "text-azulGris900",
            "justify-self-start mt-[32px]"
          )}
        >
          ¿Olvidaste tu contraseña?
        </span>
        <Link
          href="#"
          className={clsx(
            "text-regularSemiBold font-body text-azulGris900",
            "justify-self-start"
          )}
        >
          Recuperar contraseña
        </Link>
      </div> */}
      <div className="form-control">
        <BtnSubmit title="Iniciar Sesión" loading={loading} />
      </div>
    </form>
  );
}

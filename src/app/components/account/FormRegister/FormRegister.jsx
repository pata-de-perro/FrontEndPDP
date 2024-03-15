import clsx from "clsx";

export function FormRegister({ onSubmitRegister, register, errors, watch }) {
  return (
    <form onSubmit={onSubmitRegister}>
      <div className="form-control">
        <label className="label">Correo electrónico</label>
        <input
          type="email"
          className={clsx(
            "px-3 py-2",
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
          <span className="text-regular font-body text-red-500 ml-[5px]">
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
            // pattern: {
            //   value:
            //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            //   message:
            //     "La contraseña debe tener entre 8 y 30 caracteres y solo puede incluir letras, números y los puedes utilizar los siguientes carcteres especiales #?!@$ %^&*-",
            // },
          })}
        />
        {errors.password && (
          <span className="text-regular font-body text-red-500 ml-[5px]">
            {errors.password.message}
          </span>
        )}
        {errors.pattern && <span>{errors.pattern.message}</span>}
      </div>
      <div className="form-control">
        <label className="label">Confirma tu contraseña</label>
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
      <div className="form-control">
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
          <label
            className={clsx(
              "text-regular font-body text-azulGris800",
              "justify-self-start ml-[5px] mt-[15px]"
            )}
          >
            Acepto términos y condiciones
          </label>
        </div>
        {errors.termsAndConditions && (
          <span className="text-regular font-body text-red-500 ml-[5px]">
            {errors.termsAndConditions.message}
          </span>
        )}
      </div>
      <div className="form-control">
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
            "hover:bg-accent1 hover:text-accent2"
          )}
        >
          Enviar
        </button>
      </div>
    </form>
  );
}


import { clsx } from "clsx";

export function FormInvite({
  onSubmitInvite,
  register,
  errors,
}) {
  return (
     <form onSubmit={onSubmitInvite}>
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
              message: "Es necesario un correo electrónico para enviar invitación.",
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
        <button
          type="submit"
          className={clsx(
            "bg-primary",
            "w-[450px]",
            "text-white text-regular",
            "px-[8px] py-[8px]",
            "m-4",
            "rounded-md",
            "flex justify-center",
            "hover:bg-accent1 hover:text-accent2",
            "border-2 border-primary hover:border-accent1"
          )}
        >
          Enviar invitación
        </button>
      </div>
    </form>

  );
}

import clsx from "clsx";

export function FormEditProfile({ onSubmitEdit, register, errors }) {
  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmitEdit}>
        <div className="form-control mx-4">
          <label className="label font-body text-regular">Nombre</label>
          <input
            type="text"
            className={clsx(
              "px-3 py-2",
              "h-[50px]",
              "bg-white",
              "font-body text-regular",
              "border shadow-sm border-slate-300",
              "placeholder-slate-400",
              "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
              "block w-[450px] rounded-lg focus:ring-1"
            )}
            placeholder="Nombre de usuario"
            //   {...register("name", {
            //     required: false,
            //     pattern: {
            //         value: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
            //     }
            //   })}
          />
        </div>
        <div className="form-control mx-4">
          <label className="label font-body text-regular">
            Correo electrónico
          </label>
          <input
            type="email"
            className={clsx(
              "px-3 py-2",
              "h-[50px] w-[400px]",
              "bg-white input-sm",
              "font-body text-regular",
              "border shadow-sm border-slate-300",
              "placeholder-slate-400",
              "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
              "block w-[450px] rounded-lg focus:ring-1"
            )}
            placeholder="Correo electronico de usuario"
            disabled="true"
          />
        </div>
        <div className="form-control mx-4">
          <label className="label font-body text-regular">Teléfono</label>
          <input
            type="tel"
            className={clsx(
              "px-3 py-2",
              "h-[50px]",
              "bg-white",
              "font-body text-regular",
              "border shadow-sm border-slate-300",
              "placeholder-slate-400",
              "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
              "block w-[450px] rounded-lg focus:ring-1"
            )}
            placeholder="123456789"
            maxLength={14}
            //   {...register("phone", {
            //     required: false,
            //     pattern: {
            //         value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            //     }
            //   })}
          />
        </div>
        <div className="form-control mx-4">
          <label className="label font-body text-regular">Cumpleaños</label>
          <input
            type="date"
            className={clsx(
              "px-3 py-2",
              "h-[50px]",
              "font-body text-regular",
              "bg-white",
              "border shadow-sm border-slate-300",
              "placeholder-slate-400",
              "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
              "block w-[450px] rounded-lg focus:ring-1"
            )}
            placeholder="Tu cumpleaños"
            //   {...register("birthdate", {
            //     required: false,
            //   })}
          />
        </div>
        <div className="form-control mx-4">
          <label className="label font-body text-regular">Género</label>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-wrap items-center">
              <input
                type="radio"
                name="gender"
                id="Mujer"
                value="Mujer"
                className={clsx(
                  "px-3 py-2",
                  "h-4 w-4",
                  "bg-white",
                  "border shadow-sm border-slate-300",
                  "placeholder-slate-400",
                  "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
                  "block w-[450px] rounded-lg focus:ring-1"
                )}
              />
              <label className="ml-2 font-body text-regular" for="Mujer">
                Mujer
              </label>
            </div>
            <div className="flex flex-wrap items-center">
              <input
                type="radio"
                name="gender"
                id="Hombre"
                value="Hombre"
                className={clsx(
                  "px-3 py-2",
                  "h-4 w-4",
                  "bg-white",
                  "border shadow-sm border-slate-300",
                  "placeholder-slate-400",
                  "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
                  "block w-[450px] rounded-lg focus:ring-1"
                )}
              />
              <label className="ml-2 font-body text-regular" for="Hombre">
                Hombre
              </label>
            </div>
            <div className="flex flex-wrap items-center">
              <input
                type="radio"
                name="gender"
                id="NoDefinido"
                value="NoDefinido"
                className={clsx(
                  "px-3 py-2",
                  "h-4 w-4",
                  "bg-white",
                  "border shadow-sm border-slate-300",
                  "placeholder-slate-400",
                  "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
                  "block w-[450px] rounded-lg focus:ring-1"
                )}
              />
              <label className="ml-2 font-body text-regular" for="NoDefinido">
                Prefiero no definirlo
              </label>
            </div>
          </div>
          {/* {...register("gender", {
                     required: false,
                     pattern: {
                         value: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
                     }
                   })} */}
        </div>
        <div className="form-control mt-4 items-center">
          <button
            type="submit"
            className={clsx(
              "btn btn-block",
              "w-fit px-14",
              "bg-secondary/90 text-accent2",
              "hover:bg-secondary"
            )}
          >
            Guardar evento
          </button>
        </div>
      </form>
    </div>
  );
}
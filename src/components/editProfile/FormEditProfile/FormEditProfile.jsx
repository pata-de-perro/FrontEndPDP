import clsx from "clsx";

export function FormEditProfile({ onSumbitProfile, register, errors }) {
  return (
    <div className="flex justify-center">
      <form onSubmit={onSumbitProfile} className="grid grid-cols-2">
        <div className="form-control mx-4 col-span-2">
          <label className="label font-body text-regular">Nombre y Apellido</label>
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
            placeholder="Nombre Apellido"
              {...register("name", {
                required: false,
                pattern: {
                    value: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
                    message: "Escribe tu nombre y apellido. El formato permíte letras con carácteres especiales.",
                }
              })}
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
              "block w-[200px] rounded-lg focus:ring-1"
            )}
            placeholder="3314142525"
            maxLength={10}
              {...register("phoneNumber", {
                required: false,
                pattern: {
                    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                }
              })}
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
              "block w-[200px] rounded-lg focus:ring-1"
            )}
            placeholder="Tu cumpleaños"
              {...register("birthdate", {
                required: false,
              })}
          />
        </div>
        <div className="form-control mt-4 col-span-2">
          <label className="label font-body text-regular">Género</label>
          <div className="flex justify-around">
            <div className="font-body text-regular">
                  <input
                  type="radio"
                  value="femenino"
                  id="femenino"
                  name="gender"
                  className="mr-3"
                  {...register("gender",{
                    required: false,
                  })}
                  />
                  <label
                  htmlFor="Femenino">Femenino</label>
                </div>
                <div className="font-body text-regular">
                  <input
                  type="radio"
                  value="masculino"
                  id="masculino"
                  name="gender"
                  className="mr-3"
                  {...register("gender",{
                    required: false,
                  })}
                  />
                  <label
                  htmlFor="Masculino">Masculino</label>
                </div>
                <div className="font-body text-regular">
                  <input
                  type="radio"
                  value="indefinido"
                  id="indefinido"
                  name="gender"
                  className="mr-3"
                  {...register("gender",{
                    required: false,
                  })}
                  />
                  <label
                  htmlFor="Indefinido">Prefiero no decirlo</label>
                </div>
        </div>
        </div>
        <div className="form-control mt-4 items-center col-span-2">
          <button
            type="submit"
            className={clsx(
              "btn btn-block",
              "w-fit px-14",
              "bg-azulGris200 text-azulGris900",
              "hover:bg-secondary hover:text-accent2"
            )}
          >
            Actualizar perfil
          </button>
        </div>
      </form>
    </div>
  );
}

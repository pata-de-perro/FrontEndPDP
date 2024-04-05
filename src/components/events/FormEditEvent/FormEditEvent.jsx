"use client";
import { clsx } from "clsx";

export function FormEditEvent({
  onSubmitEditEvent,
  isTravel,
  register,
  errors,
  watch,
}) {
  return (
    <form onSubmit={onSubmitEditEvent}>
      <div className="form-control mb-4">
        <label htmlFor="title" className={clsx("text-sm mb-1")}>
          Nombre de tu {isTravel ? "viaje" : "salida"}
        </label>
        <input
          id="title"
          type="text"
          placeholder="Ingrese nombre del viaje y/o salida"
          className={clsx("input input-bordered input-sm", "w-full")}
          {...register("title", {
            required: { value: true, message: "Por favor ingrese el nombre" },
          })}
        />
        <div className="label">
          {errors?.title && (
            <span className="label-text-alt text-red-500">
              {errors.title.message}
            </span>
          )}
        </div>
      </div>
      <div className="form-control mb-4">
        <label htmlFor="description" className={clsx("text-sm mb-1")}>
          Descripción de tu {isTravel ? "viaje" : "salida"}
        </label>
        <textarea
          id="description"
          placeholder="Ingrese la descripción"
          className={clsx(
            "textarea textarea-bordered textarea-sm",
            "w-full",
            "h-20",
            "leading-tight"
          )}
          {...register("description")}
        ></textarea>
      </div>
      {watch("isTravel") === true || watch("isTravel") === "true" ? (
        <div className="flex space-x-4 mb-4">
          <div className="form-control w-1/2">
            <label htmlFor="initialDate" className={clsx("text-sm mb-1")}>
              Fecha de Inicio
            </label>
            <input
              id="initialDate"
              type="date"
              className={clsx("input input-bordered input-sm", "w-full")}
              {...register("initialDate", {
                required: {
                  value: true,
                  message: "Por favor ingrese fecha de inicio del viaje",
                },
              })}
            />
            <div className="label">
              {errors?.initialDate && (
                <span className="label-text-alt text-red-500">
                  {errors.initialDate.message}
                </span>
              )}
            </div>
          </div>
          <div className="form-control w-1/2">
            <label htmlFor="endDate" className={clsx("text-sm mb-1")}>
              Fecha de Término
            </label>
            <input
              id="endDate"
              type="date"
              className={clsx("input input-bordered input-sm", "w-full")}
              {...register("endDate", {
                required: {
                  value: true,
                  message: "Por favor ingrese fecha de término del viaje",
                },
                validate: (value) => {
                  const initialDateValue = watch("initialDate");
                  return (
                    value > initialDateValue ||
                    "La fecha de término debe ser posterior a la fecha inicial"
                  );
                },
              })}
            />
            <div className="label">
              {errors?.endDate && (
                <span className="label-text-alt text-red-500">
                  {errors.endDate.message}
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex space-x-1 mb-4">
            <div className="form-control">
              <label htmlFor="initialDate" className={clsx("text-sm mb-1")}>
                Fecha y Hora
              </label>
              <input
                id="initialDate"
                type="datetime-local"
                className={clsx("input input-bordered input-sm", "w-full")}
                {...register("initialDate", {
                  required: {
                    value: true,
                    message: "Por favor ingrese fecha y hora de la salida",
                  },
                })}
              />
              <div className="label">
                {errors?.initialDate && (
                  <span className="label-text-alt text-red-500">
                    {errors.initialDate.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      <div className="form-control">
        <button
          type="submit"
          className={clsx(
            "btn btn-block",
            "bg-accent1 text-accent2",
            "hover:bg-accent1/90"
          )}
        >
          Guardar cambios
        </button>
      </div>
    </form>
  );
}

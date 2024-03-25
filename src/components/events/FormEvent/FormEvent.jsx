"use client";
import { useEffect } from "react";
import { clsx } from "clsx";
import { addHoursToDateTime } from "../../../helpers";
import Link from "next/link";

export function FormEvent({
  register,
  onSubmitEvent,
  errors,
  watch,
  setValue,
}) {
  useEffect(() => {
    const initialDateValue = watch("initialDate");

    if (watch("isTravel") === "false" && initialDateValue) {
      const endDateVale = addHoursToDateTime(initialDateValue, 3);
      setValue("endDate", endDateVale);
    }
  }, [watch("initialDate"), watch("isTravel")]);

  return (
    <form onSubmit={onSubmitEvent}>
      <div className="flex space-x-4 mb-4">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              {...register("isTravel")}
              value="true"
              className="radio checked:bg-primary"
              defaultChecked={true}
            />
            <span className="label-text pl-2">Estoy planeando un viaje</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              {...register("isTravel")}
              value="false"
              className="radio checked:bg-primary"
              defaultChecked={false}
            />
            <span className="label-text pl-2">Estoy planeando una salida</span>
          </label>
        </div>
      </div>
      <div className="form-control mb-4">
        <label htmlFor="title" className={clsx("text-sm mb-1")}>
          Nombre del viaje y/o salida <span className="text-red-500">*</span>
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
          Descripción <span>(opcional)</span>
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
        ></textarea>
      </div>
      <div className="form-control mb-4">
        <label htmlFor="ubication" className={clsx("text-sm mb-1")}>
          Lugar <span className="text-red-500">*</span>
        </label>
        <input
          id="ubication"
          type="text"
          placeholder="Ingrese el lugar"
          className={clsx("input input-bordered input-sm", "w-full")}
          {...register("ubication", {
            required: {
              value: true,
              message: "Por favor ingrese un lugar y/o destino para viajar",
            },
          })}
        />
        <div className="label">
          {errors?.ubication && (
            <span className="label-text-alt text-red-500">
              {errors.ubication.message}
            </span>
          )}
        </div>
      </div>
      {watch("isTravel") === true || watch("isTravel") === "true" ? (
        <div className="flex space-x-4 mb-4">
          <div className="form-control w-1/2">
            <label htmlFor="initialDate" className={clsx("text-sm mb-1")}>
              Fecha de Inicio <span className="text-red-500">*</span>
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
              Fecha de Término <span className="text-red-500">*</span>
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
                Fecha y Hora de Inicio <span className="text-red-500">*</span>
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
          <h3
            className={clsx(
              "my-4",
              "text-base font-medium text-center",
              "divider"
            )}
          >
            ¿A dónde quieres ir?
          </h3>
          <div className="flex space-x-4 mb-4 items-center">
            <div className="form-control flex items-center">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className={clsx(
                    "checkbox",
                    "border-gray-400 checked:border-primary",
                    "[--chkbg:theme(colors.primary)]"
                  )}
                  {...register("Restaurantes")}
                />
              </label>
              <span className="label-text">Restaurantes</span>
            </div>
            <div className="form-control flex items-center">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className={clsx(
                    "checkbox",
                    "border-gray-400 checked:border-primary",
                    "[--chkbg:theme(colors.primary)]"
                  )}
                  {...register("Vida nocturna")}
                />
              </label>
              <span className="label-text">Vida nocturna</span>
            </div>
            <div className="form-control flex items-center">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className={clsx(
                    "checkbox",
                    "border-gray-400 checked:border-primary",
                    "[--chkbg:theme(colors.primary)]"
                  )}
                  {...register("Cafeterías")}
                />
              </label>
              <span className="label-text">Cafeterías</span>
            </div>
            <div className="form-control flex items-center">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className={clsx(
                    "checkbox",
                    "border-gray-400 checked:border-primary",
                    "[--chkbg:theme(colors.primary)]"
                  )}
                  {...register("Museos y Arte")}
                />
              </label>
              <span className="label-text">Museos y Arte</span>
            </div>
          </div>
        </>
      )}
      <div className="form-control">
        <button
          type="submit"
          className={clsx(
            "btn btn-block",
            "bg-secondary/90 text-accent2",
            "hover:bg-secondary"
          )}
        >
          <Link href="/mx//travelplan">Guardar</Link>
        </button>
      </div>
    </form>
  );
}

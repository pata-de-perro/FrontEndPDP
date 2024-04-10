"use client";
import { useEffect } from "react";
import { clsx } from "clsx";
import { addHoursToDateTime } from "@/helpers";

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
    <form onSubmit={onSubmitEvent} className="w-[430px] ">
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
      <div className="md:sr-only lg:sr-only">
        <span
          className={clsx(
            "underline decoration-4 decoration-primary text-inviteSmallText font-body"
          )}
        >
          Un viaje
        </span>
        <span className="text-inviteSmallText font-body ml-2">
          es aquel que tiene como duración de dos días o más.
        </span>
      </div>
      <div className="md:sr-only lg:sr-only mb-2">
        <span
          className={clsx(
            "underline decoration-4 decoration-secondary text-inviteSmallText font-body"
          )}
        >
          Una salida
        </span>
        <span className="text-inviteSmallText font-body ml-2">
          {" "}
          es aquella que tiene como duración sólo un día e inicia a una hora en
          específico.
        </span>
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
          {...register("description")}
        ></textarea>
      </div>
      <div className="form-control mb-4 ">
        <label htmlFor="locationEvent" className={clsx("text-sm mb-1")}>
          Escribe un lugar, municipio o zona{" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          id="locationEvent"
          type="text"
          placeholder="Ingrese el lugar"
          className={clsx("input input-bordered input-sm", "w-full")}
          {...register("locationEvent", {
            required: { value: true, message: "Por favor ingrese un lugar" },
          })}
        />
        <div className="label">
          {errors?.title && (
            <span className="label-text-alt text-red-500">
              {errors.locationEvent.message}
            </span>
          )}
        </div>
      </div>
      <div className=" text-inviteSmallText font-body mb-2 md:sr-only lg:sr-only">
        <span>La plataforma</span>
        <span className="underline decoration-4 decoration-accent1 ml-2">
          busca por zonas{" "}
        </span>
        <span>esta te hará sugerencias basado en diferentes categorías.</span>
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
              min={new Date().toISOString().split("T")[0]}
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
          Guardar evento
        </button>
      </div>
    </form>
  );
}

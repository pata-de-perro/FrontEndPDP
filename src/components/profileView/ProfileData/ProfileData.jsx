import clsx from "clsx";

import { birthdayDateProfile } from "@/helpers";

export function ProfileDataView({ data }) {
  return (
    <>
      <div className="p-4">
        <h2 className="font-heading text-h2">Datos de perfil</h2>
        <div>
          <span className="font-heading text-regular">Nombre </span>
          <span className="font-heading text-regularSemiBold">{data?.name}</span>
        </div>
        <div>
          <span className="font-heading text-regular">Correo electrónico </span>
          <span className="font-heading text-regularSemiBold">
            {data?.email}
          </span>
        </div>
        <div>
          <span className="font-heading text-regular">Teléfono </span>
          <span className="font-heading text-regularSemiBold">
            {data?.phoneNumber}
          </span>
        </div>
        <div>
        <span className="font-heading text-regular">Cumpleaños </span>
        <span className="font-heading text-regularSemiBold">
          {birthdayDateProfile(data?.birthdate)}
        </span>
        </div>
      </div>
    </>
  );
}

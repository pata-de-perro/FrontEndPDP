import clsx from "clsx";
import { TitleSection } from "@/components/layouts";

export function ReviewEvents() {
  return (
    <div className={clsx("mt-10 mr-4")}>
      <TitleSection
        title="Revisa tus viajes y/o salidas"
        urlIcon="/Icono-Fecha.svg"
      />
    </div>
  );
}

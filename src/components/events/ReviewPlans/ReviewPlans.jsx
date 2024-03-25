import { TitleSection } from "@/components/layouts";
import { NotEvents } from "@/components/events";

export function ReviewPlans() {
  return (
    <>
      <TitleSection title="Revisa tus planes" urlIcon="/Icono-Fecha.svg" />
      <NotEvents title="Sin registro de planes" />
    </>
  );
}

import { HeroAuth, TitleSection } from "@/components/layouts";
import { AiTwotoneCalendar } from "react-icons/ai";

export default function PlansPage() {
  const icon = <AiTwotoneCalendar />
  return (
    <div>
      <HeroAuth title="¡Sigamos planificando!">
        <p>
          Visualiza fácilmente todas las cosas que deseas realizar en tu viaje.
        </p>
      </HeroAuth>
      <TitleSection
        title="Revisa tus viajes y/o salidas"
        urlIcon={icon}
      />
    </div>
  );
}

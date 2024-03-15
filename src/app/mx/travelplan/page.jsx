import { HeroAdmin, TitleSection } from "@/app/components/common";
import { TravelMapContainer } from "../../components/maps/TravelMapContainer";

export default function TravelPlan() {
  return (
    <div>
      <HeroAdmin title="¡Realiza tú plan!">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </HeroAdmin>
      <TitleSection title="Revisa tu mapa" urlIcon="/Icono-Fecha.svg" />
      <TravelMapContainer/>
    </div>
  );
}

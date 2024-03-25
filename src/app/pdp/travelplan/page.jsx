import { HeroAuth, TitleSection } from "@/components/layouts";
import { TravelMapContainer } from "@/components/maps";

export default function TravelPlan() {
  return (
    <div>
      <HeroAuth title="¡Realiza tú plan!">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </HeroAuth>
      <TitleSection title="Revisa tu mapa" urlIcon="/Icono-Fecha.svg" />
      <TravelMapContainer />
    </div>
  );
}

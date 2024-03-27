import { HeroAuth, TitleSection } from "@/components/layouts";
import { GoogleMap } from "@/components/maps";

export default function TravelPage({ params }) {
  return (
    <div>
      <HeroAuth title="¡Realiza tú plan!">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </HeroAuth>
      <TitleSection title="Revisa tu mapa" urlIcon="/Icono-Fecha.svg" />
      <GoogleMap />
    </div>
  );
}

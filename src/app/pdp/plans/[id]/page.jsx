import { HeroAuth, TitleSection } from "@/components/layouts";
import { MakePlan } from "@/components/plans";

export default function PlanEventPage({ params }) {
  return (
    <div>
      <HeroAuth title="¡Realiza tú plan!" urlImg="/World-bro.svg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </HeroAuth>
      <TitleSection title="Revisa tu mapa" urlIcon="/Icono-Fecha.svg" />
      <MakePlan plan={params.id} />
    </div>
  );
}

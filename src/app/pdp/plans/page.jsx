import { HeroAuth, TitleSection } from "@/components/layouts";

export default function PlansPage() {
  return (
    <div>
      <HeroAuth title="¡Revisa todos tus planes!">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </HeroAuth>
      <TitleSection
        title="Revisa tus viajes y/o salidas"
        urlIcon="/Icono-Fecha.svg"
      />
    </div>
  );
}

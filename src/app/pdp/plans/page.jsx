import { HeroAuth, TitleSection } from "@/components/layouts";

export default function PlansPage() {
  return (
    <div>
      <HeroAuth title="¡Sigamos planificando!">
        <p>
        Visualiza fácilmente todas las cosas que deseas realizar en tu viaje.
        </p>
      </HeroAuth>
      <TitleSection
        title="Revisa tus viajes y/o salidas"
        urlIcon="/Icono-Fecha.svg"
      />
    </div>
  );
}

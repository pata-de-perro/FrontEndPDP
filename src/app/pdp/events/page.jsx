import { HeroAuth, TitleSection } from "@/components/layouts";

export default function EventsPage() {
  return (
    <>
      <HeroAuth title="¡Sigamos planificando!" urlImg="/Journey-amico.svg">
        <p>
          Visualiza fácilmente todas las cosas que deseas realizar en tu viaje.
        </p>
      </HeroAuth>
      <TitleSection
        title="Revisa tus viajes y/o salidas"
        urlIcon="/Icono-Fecha.svg"
      />
    </>
  );
}

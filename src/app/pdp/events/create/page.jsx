import { HeroAuth } from "@/components/layouts";
import { CreateEvent } from "@/components/events";

export default function CreateEventPage() {
  return (
    <div>
      <HeroAuth
        title="¡Háblanos sobre tu evento!"
        urlImg="/Globalization-amico.svg"
      >
        <p>
          Queremos que el planear tu viaje o salida sea lo más fácil posible.
        </p>
      </HeroAuth>
      <CreateEvent />
    </div>
  );
}

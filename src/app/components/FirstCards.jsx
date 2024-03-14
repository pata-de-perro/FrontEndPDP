import clsx from "clsx";
import { FunctionCardsR } from "./FunctionCardsR";
import { FunctionCardsL } from "./FunctionCardsL";

export default function FirstCards() {
  return (
    <section className={clsx("mb-[80px]")}>
      <p
        className={clsx(
          "font-heading",
          "text-h1",
          "text-center",
          "text-accent2",
          "m-[24px]",
          "flex",
          "justify-center"
        )}
      >
        Facilitamos la planificación de tus viajes
      </p>

      <div
        className={clsx(
          "grid",
          "justify-items-center",
          "md:grid",
          "md:grid-cols-2"
        )}
      >
        <img
          src="/Navigation-pana.svg"
          width={453}
          height={453}
          alt="progresive app pana"
          className={clsx(
            "w-[370px]",
            "sr-only",
            "lg:not-sr-only",
            "lg:justify-self-end",
          )}
        />
        <FunctionCardsR 
        title="Guarda puntos de interés"
        urlImg="/Navigation-pana.svg"
        description="Facilita el llegar de un punto a otro guardando previamente los
        puntos de interés que deseas visitar en tu viaje."
        />

        <FunctionCardsL 
        title="Controla las fechas de tus eventos"
        urlImg="/Date-picker-pana.svg"
        description="Cuando crees tus eventos compartelos con tus calendarios, para que
        tus amigos y tu reciban recordatorios."
        />

        <img
          src="/Date-picker-pana.svg"
          width={453}
          height={453}
          alt="progresive app pana"
          className={clsx(
            "w-[370px]", 
            "sr-only", 
            "lg:not-sr-only lg:justify-self-start",
            )}
        />

        <img
          src="/Trip-pana.svg"
          width={453}
          height={453}
          alt="progresive app pana"
          className={clsx(
            "w-[370px]", 
            "sr-only", 
            "lg:not-sr-only",             
            "lg:justify-self-end",)}
        />

        <FunctionCardsR 
        title="Comparte el itinerario con tus amigos"
        urlImg="/Trip-pana.svg"
        description="Comparte el itinerario con tus amigos, para que todos puedan
        gestionar sus tiempos y el viaje sea más amigable para todos."
        />

        <FunctionCardsL 
        title="Controla los gastos de viaje"
        urlImg="/Account-rafiki.svg"
        description="Lleva un control fácil y rápido de cuentas que pagas y cómo la
        divides entre tus amigos, guarda su ubicación y notas de compra."
        />

        <img
          src="/Account-rafiki.svg"
          width={453}
          height={453}
          alt="Account Rafiki"
          className={clsx(
            "w-[370px]", 
            "sr-only", 
            "lg:not-sr-only",
            "lg:justify-self-start",
            )}
        />
      </div>
    </section>
  );
}

import clsx from "clsx";

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
        <div
          className={clsx(
            "w-[358px]",
            "h-[425px]",
            "shadow-xl",
            "p-[20px]",
            "rounded-xl",
            "m-[24px]",
            "flex",
            "flex-wrap",
            "justify-center",
            "lg:h-[200px]",
            "lg:items-center",
            "lg:justify-center",
            "lg:justify-self-start",
            "lg:self-center",
          )}
        >
          <img
            src="/Navigation-pana.svg"
            width={453}
            height={453}
            alt="progresive app pana"
            className={clsx("w-[260px]", "lg:sr-only",)}
          />
          <p
            className={clsx(
              "font-heading",
              "text-greentext",
              "text-h3",
              "text-center",
              "lg:justify-items-center",
              "mb-[10px]",
              "lg:mb-[-40px]"
            )}
          >
            Guarda puntos de interés
          </p>
          <p
            className={clsx(
              "font-body",
              "text-regular",
              "text-azulGris900",
              "text-center",
              "mx-[20px]"
            )}
          >
            Facilita el llegar de un punto a otro guardando previamente los
            puntos de interés que deseas visitar en tu viaje.
          </p>
        </div>

        <div
          className={clsx(
            "w-[358px]",
            "h-[425px]",
            "shadow-xl",
            "p-[20px]",
            "rounded-xl",
            "m-[24px]",
            "flex",
            "flex-wrap",
            "justify-center",
            "lg:h-[200px]",
            "lg:items-center",
            "lg:justify-center",
            "lg:justify-self-end",
            "lg:self-center",
          )}
        >
          <img
            src="/Date-picker-pana.svg"
            width={453}
            height={453}
            alt="progresive app pana"
            className={clsx(
                "w-[260px]", 
                "lg:sr-only",
                )}
          />
          <p
            className={clsx(
              "font-heading",
              "text-accent2",
              "text-h3",
              "text-center",
              "mb-[10px]",
              "mx-[50px]"
            )}
          >
            Controla las fechas de tus eventos
          </p>
          <p
            className={clsx(
              "font-body",
              "text-regular",
              "text-azulGris900",
              "text-center",
              "mx-[25px]"
            )}
          >
            Cuando crees tus eventos compartelos con tus calendarios, para que
            tus amigos y tu reciban recordatorios.
          </p>
        </div>
        <img
          src="/Date-picker-pana.svg"
          width={453}
          height={453}
          alt="progresive app pana"
          className={clsx(
            "w-[370px]", 
            "sr-only", 
            "lg:not-sr-only",
            "lg:justify-self-start",
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
        <div
          className={clsx(
            "w-[358px]",
            "h-[425px]",
            "shadow-xl",
            "p-[20px]",
            "rounded-xl",
            "m-[24px]",
            "flex",
            "flex-wrap",
            "justify-center",
            "lg:h-[200px]",
            "lg:items-center",
            "lg:justify-center",
            "lg:justify-self-start",
            "lg:self-center",
          )}
        >
          <img
            src="/Trip-pana.svg"
            width={453}
            height={453}
            alt="progresive app pana"
            className={clsx("w-[260px]", "lg:sr-only")}
          />
          <p
            className={clsx(
              "font-heading",
              "text-greentext",
              "text-h3",
              "text-center",
              "mb-[10px]",
              "mx-[25px]"
            )}
          >
            Comparte tu itinerario con tus amigos
          </p>
          <p
            className={clsx(
              "font-body",
              "text-regular",
              "text-azulGris900",
              "text-center",
              "mx-[15px]"
            )}
          >
            Comparte el itinerario con tus amigos, para que todos puedan
            gestionar sus tiempos y el viaje sea más amigable para todos.
          </p>
        </div>

        <div
          className={clsx(
            "w-[358px]",
            "h-[425px]",
            "shadow-xl",
            "p-[20px]",
            "rounded-xl",
            "m-[24px]",
            "flex",
            "flex-wrap",
            "justify-center",
            "lg:h-[200px]",
            "lg:items-center",
            "lg:justify-center",
            "lg:justify-self-end",
            "lg:self-center",
          )}
        >
          <img
            src="/Account-rafiki.svg"
            width={453}
            height={453}
            alt="Account Rafiki"
            className={clsx("w-[260px]", "lg:sr-only")}
          />
          <p
            className={clsx(
              "font-heading",
              "text-accent2",
              "text-h3",
              "text-center",
              "mb-[10px]"
            )}
          >
            Controla los gastos de viaje
          </p>
          <p
            className={clsx(
              "font-body",
              "text-regular",
              "text-azulGris900",
              "text-center",
              "mx-[10px]"
            )}
          >
            Lleva un control fácil y rápido de cuentas que pagas y cómo la
            divides entre tus amigos, guarda su ubicación y notas de compra.
          </p>
        </div>
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

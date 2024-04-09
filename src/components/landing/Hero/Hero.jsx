import clsx from "clsx";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={clsx("flex flex-wrap", "justify-center", "md:flex-nowrap")}>
      <img
        src="/Progresive-app-pana.svg"
        width={453}
        height={453}
        alt="progresive app pana"
        className={clsx(
          "w-[319px]",
          "border-azulGris50",
          "md:w-[319px] md:border-b-0 md:mx-6 md:border-r",
          "lg:w-[453px]"
        )}
      />
      <div
        className={clsx(
          "justify-center",
          "text-center",
          "m-8",
          "md:text-left md:m-4"
        )}
      >
        <span className={clsx("lg:flex", "lg:flex-wrap", "lg:items-end")}>
          <h1
            className={clsx(
              "text-h1",
              "font-heading",
              "text-azulGris900",
              "mt-3"
            )}
          >
            Bienvenido a
          </h1>
          <h1
            className={clsx(
              "text-h1",
              "font-heading",
              "text-primary",
              "lg:pl-2"
            )}
          >
            PataDePerro
          </h1>
        </span>
        <p
          className={clsx(
            "text-regular text-center font-body text-azulGris900",
            "my-8 mx-2",
            // "w-[400px]",
            "md:w-[280px] md:text-left md:my-2",
            "lg:w-[360px] lg:mb-8"
          )}
        >
          Organiza tu viaje, guarda puntos de interés y comparte el itinerario
          con todos tus compañeros de viaje.
        </p>

        <Link
          className={clsx(
            "text-primary text-h4 text-center",
            "font-heading",
            "mt-8",
            "md:text-left"
          )}
          href="/account/register"
        >
          Regístrate
        </Link>
        <p
          className={clsx(
            "text-azulGris900 text-regular text-center",
            "font-body",
            "my-8",
            "md:text-left"
          )}
        >
          {" "}
          -- o --
        </p>
        <button
          className={clsx(
            "text-heading text-white justify-center",
            "w-[250px] h-[48px]",
            "rounded-full",
            "bg-primary",
            "mb-8"
          )}
        >
          <Link href="/account/login">Iniciar sesión</Link>
        </button>
      </div>
    </div>
  );
}

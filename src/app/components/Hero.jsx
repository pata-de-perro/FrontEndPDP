import clsx from "clsx";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <span className="flex flex-wrap">
        <p className={clsx("text-h1 font-heading text-azulGris900")}>
          Bienvenido a{" "}
        </p>
        <p className={clsx("text-h1 font-heading text-primary", "px-2")}>
          PataDePerro
        </p>
      </span>
      <p className={clsx("text-regular font-body text-azulGris900")}>
        Organiza tu viaje, guarda puntos de interés y comparte el itinerario con
        todos tus compañeros de viaje.
      </p>

      <p className={clsx("text-primary text-h4 font-heading")}>Registrate</p>
      <p className={clsx("text-primary text-regular font-body")}> -- o --</p>
      <button
        className={clsx(
          "w-[250px] h-[48px]",
          "rounded-full",
          "bg-primary",
          "text-regular text-white"
        )}
      >
        Iniciar sesión
      </button>
    </div>
  );
}

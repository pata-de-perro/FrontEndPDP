import clsx from "clsx";
import Image from "next/image";

export default function SecondCallToAction() {
  return (
    <div
      className={clsx(
        "bg-accent1",
        "max-w-lg",
        "w-auto",
        "flex",
        "items-center",
        "justify-center"
      )}
    >
      <div
        className={clsx(
          "my-3.5",
          "size-full",
          "flex",
          "items-center",
          "justify-center",
          " flex-col"
        )}
      >
        <div className={clsx("my-3.5", "size-full", "h-48", "w-80")}>
          <Image
            src="/Coworking-pana-2.svg"
            width={400}
            height={100}
            alt="Vertical road pic"
          />
        </div>
        <div
          className={clsx(
            "flex",
            "items-center",
            "justify-center",
            " flex-col",
            "max-w-80",
            "w-80",
            "mt-3"
          )}
        >
          <p
            className={clsx(
              "text-h1",
              "font-heading",
              "text-wrap",
              "text-[#253A74]"
            )}
          >
            Pasa menos tiempo
          </p>
          <p className={clsx("text-h1", "font-heading", "text-wrap", "text-[#253A74]")}>
            planeando y más
          </p>
          <p className={clsx("text-h1", "font-heading", "text-wrap", "text-[#253A74]")}>
            disfrutando
          </p>
        </div>
        <div
          className={clsx(
            "flex",
            "items-center",
            "justify-center",
            " flex-col",
            "max-w-80",
            "w-80",
            "mt-3"
          )}
        >
          <p className={clsx("text-regular")}>
            Ingresa tu destino y puntos de interés
          </p>
          <p className={clsx("text-regular")}>¡Compartelo con tus amigos! </p>
        </div>
        <button className={clsx("bg-accent2", "text-white", "rounded-2xl", "mt-3", "text-link")}>
          ¡Registrate!
        </button>
      </div>
    </div>
  );
}

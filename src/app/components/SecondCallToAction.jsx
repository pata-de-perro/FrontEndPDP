import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function SecondCallToAction() {
  return (
    <div
      className={clsx(
        "flex flex-wrap",
        "bg-accent1",
        "w-auto",
        "items-center justify-center",
        "md:h-[400px]",
        "lg:h-[500px]"
      )}
    >
      <div
        className={clsx(
          "my-3.5",
          "size-full",
          "flex flex-col",
          "items-center justify-center",
          "md:flex-row md:flex-row-reverse", 
        )}
      >
        <div className={clsx("my-3.5", "size-full", "h-48", "w-80", "md:w-[350px]", "lg:h-[500px]","lg:w-[600px]")}>
          <Image
          className={clsx(
            "md:h-[210px]","md:w-[350px]",
            "lg:h-[500px]","lg:w-[600px]",
          )}
            src="/Coworking-pana-2.svg"
            width={400}
            height={100}
            alt="Vertical road pic"
          />
        </div>
        <div
          className={clsx(
            "flex flex-col",
            "items-center justify-center",
            "w-80",
            "mt-3",
            "md:place-items-start", 
            "lg:w-[350px]",
          )}
        >
          <p
            className={clsx(
              "text-h1",
              "font-heading",
              "text-accent2",
              "text-wrap",
            )}
          >
            Pasa menos tiempo
          </p>
          <p
            className={clsx(
              "text-h1 text-wrap text-accent2",
              "font-heading",
            )}
          >
            planeando y más
          </p>
          <p
            className={clsx(
              "text-h1 text-wrap text-accent2",
              "font-heading",
            )}
          >
            disfrutando
          </p>
          <div
          className={clsx(
            "flex flex-col",
            "items-center justify-center",
            "max-w-80 w-80",
            "mt-3",
            "md:place-items-start", 
          )}
        >
          <p className={clsx("text-regular")}>
            Ingresa tu destino y puntos de interés
          </p>
          <p className={clsx("text-regular")}>¡Compartelo con tus amigos! </p>
        </div>
        <button
          className={clsx(
            "w-[250px] h-[48px]",
            "my-8",
            "rounded-full",
            "bg-accent2",
            "justify-center",
            "text-heading text-white",
            "md:w-[159px] md:h-[36px]"
          )}
        >
          <Link href="/register">¡Regístrate!</Link>
        </button>
        </div>
      </div>
    </div>
  );
}

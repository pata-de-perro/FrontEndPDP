import clsx from "clsx";
import Image from "next/image";

export default function Functions() {
  return (
    <div
      className={clsx(
        "max-w-lg",
        "w-auto",
        "full-size",
        "flex",
        "items-center",
        "justify-center",
        "flex-col"
      )}
    >
      <div
        className={clsx(
          "my-24",
          "flex",
          "items-center",
          "justify-center",
          "w-80",
          " flex-col"
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
          Algunas de
        </p>
        <p
          className={clsx(
            "text-h1",
            "font-heading",
            "text-wrap",
            "text-[#253A74]"
          )}
        >
          nuestras funciones
        </p>
      </div>
      <div className={clsx("size-full", "relative")}>
        <Image
          className={clsx("mt-7")}
          src="/Vertical-road.svg"
          width={500}
          height={100}
          alt="Vertical road pic"
        />
        <div
          className={clsx(
            "w-44",
            "flex",
            "items-center",
            "justify-center",
            "absolute top-[-20px] right-11"
          )}
        >
          <p
            className={clsx(
              "text-h1",
              "font-heading",
              "text-wrap",
              "text-primary"
            )}
          >
            Facilita las reuniones
          </p>
        </div>
        <div
          className={clsx(
            "w-44",
            "flex",
            "items-center",
            "justify-center",
            "absolute top-[305px] left-[60px]"
          )}
        >
          <p
            className={clsx(
              "text-h1",
              "font-heading",
              "text-wrap",
              "text-primary"
            )}
          >
            Divide gastos
          </p>
        </div>
        <div
          className={clsx(
            "w-50",
            "flex",
            "items-center",
            "justify-center",
            "absolute top-[671px] left-[232px]"
          )}
        >
          <p
            className={clsx(
              "text-h1",
              "font-heading",
              "text-wrap",
              "text-primary"
            )}
          >
            Comparte itinerarios
          </p>
        </div>
        <div
          className={clsx(
            "w-72",
            "flex",
            "items-center",
            "justify-center",
            "flex-col",
            "absolute top-[1285px] left-[75px]"
          )}
        >
          <p
            className={clsx(
              "text-h1",
              "font-heading",
              "text-wrap",
              "text-primary"
            )}
          >
            Simplifica el
          </p>
          <p
            className={clsx(
              "text-h1",
              "font-heading",
              "text-wrap",
              "text-primary"
            )}
          >
            control de gastos
          </p>
        </div>
      </div>
    </div>
  );
}

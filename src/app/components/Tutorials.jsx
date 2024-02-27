import clsx from "clsx";
import Image from "next/image";

export default function Tutorials() {
  return (
    <div
      className={clsx(
        "w-auto",
        "full-size",
        "flex",
        "items-center",
        "justify-center",
        "flex-col",
        "flex-wrap",
        "md:h-[400px]",
        "lg:h-[500px]"
      )}
    >
      <div
        className={clsx(
          "flex",
          "items-center",
          "justify-center",
          "flex-col",
          "md:flex-row",
          "md:flex-row-reverse",
          "lg:sr-only"
        )}
      >
        <div className={clsx("flex", "flex-col-reverse", "md:items-start")}>
          <div
            className={clsx(
              "flex",
              "items-center",
              "justify-center",
              "flex-col",
              "md:order-last",
              "md:items-start",
              "md:mb-8"
            )}
          >
            <p className={clsx("text-h3", "text-accent2", "drop-shadow-xl")}>
              Cómo funciona
            </p>
            <Image
              className={clsx("mt-7", "md:mt-4")}
              src="/Video-cover.svg"
              width={350}
              height={100}
              alt="Vertical road pic"
            ></Image>
          </div>
          <div
            className={clsx(
              "flex",
              "items-center",
              "justify-center",
              "flex-col",
              "sr-only",
              "md:not-sr-only",
              "flex",
              "flex-col-reverse",
              "md:items-start"
            )}
          >
            <p className={clsx("text-accent2", "text-h3", "deop-shadow-2xl")}>
              Agregando experiencias
            </p>
            <Image
              className={clsx("mt-4", "z-10")}
              src="/Video-cover2.svg"
              width={350}
              height={100}
              alt="Vertical road pic"
            ></Image>
          </div>
        </div>
        <Image
          className={clsx("z-40", "sm:not-sr-only", "md:sr-only")}
          src="/Hand.svg"
          width={500}
          height={100}
          alt="Vertical road pic"
        ></Image>
        <Image
          className={clsx("z-40", "sr-only", "md:not-sr-only", "lg:sr-only")}
          src="/Hand-md.svg"
          width={500}
          height={100}
          alt="Vertical road pic"
        ></Image>
        <div
          className={clsx("flex", "items-center", "justify-center", "flex-col")}
        >
          <div
            className={clsx(
              "flex",
              "items-center",
              "justify-center",
              "flex-col",
              "md:sr-only",
              "sm:not-sr-only",
              "w-[400px]"
            )}
          >
            <p className={clsx("text-accent2", "text-h3", "deep-shadow-2xl")}>
              Agregando experiencias
            </p>
            <Image
              className={clsx("mt-4")}
              src="/Video-cover2.svg"
              width={500}
              height={100}
              alt="Vertical road pic"
            ></Image>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "flex",
          "flex-row",
          "sr-only",
          "lg:not-sr-only",
          "full-size",
          "relative"
        )}
      >
        <Image
          className={clsx("mt-7", "md:mt-4", "z-0")}
          src="/Hand-lg.svg"
          width={1200}
          height={100}
          alt="Vertical road pic"
        ></Image>
        <div
          className={clsx(
            "flex",
            "flex-row",
            "full-size",
            "relative top-20 left-0 right-0",
            "z-50"
          )}
        >
          <div
            className={clsx(
              "flex",
              "items-center",
              "justify-center",
              "flex-col"
            )}
          >
            <p className={clsx("text-h3", "text-accent2", "drop-shadow-xl")}>
              Cómo funciona
            </p>
            <Image
              className={clsx("mt-7", "md:mt-4")}
              src="/Video-cover.svg"
              width={350}
              height={100}
              alt="Vertical road pic"
            ></Image>
          </div>
          <div
            className={clsx(
              "flex",
              "items-center",
              "justify-center",
              "flex-col",
              "flex",
              "flex-col-reverse"
            )}
          >
            <p className={clsx("text-accent2", "text-h3", "deop-shadow-2xl")}>
              Agregando experiencias
            </p>
            <Image
              className={clsx("mt-4", "z-10")}
              src="/Video-cover2.svg"
              width={350}
              height={100}
              alt="Vertical road pic"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

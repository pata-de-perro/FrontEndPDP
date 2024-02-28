import clsx from "clsx";
import Image from "next/image";

export default function Tutorials() {
  return (
    <div
      className={clsx(
        "w-auto",
        "full-size",
        "flex",
        "flex-col",
        "flex-wrap",
        "md:h-[500px]",
      )}
    >
      <div
        className={clsx(
          "flex",
          "items-center",
          "flex-col",
          "md:flex-row",
          "md:flex-row-reverse",
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
            <p className={clsx("text-h3", "text-accent2",)}>
              Cómo funciona
            </p>
            <Image
              className={clsx("mt-7", "md:mt-4")}
              src="/Video-cover.svg"
              width={350}
              height={100}
              alt="VIDEO COVER 1"
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
              alt="VIDEO COVER 2"
            ></Image>
          </div>
        </div>
        <Image
          className={clsx("z-40", "sm:not-sr-only", "md:sr-only")}
          src="/App-mockup-sm.svg"
          width={500}
          height={100}
          alt="mockup phone screen sm"
        ></Image>
        <Image
          className={clsx("z-40", "sr-only", "md:not-sr-only",)}
          src="/App-mockup-md.svg"
          width={500}
          height={100}
          alt="Hand with phone screen lg"
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
              alt="VIDEO COVER 2"
            ></Image>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "flex",
          "flex-row",
          // "grid grid-cols-3",
          "sr-only",
          "lg:not-sr-only",
          "full-size",
          "relative",
          "bg-cover bg-no-repeat"
        )}
      >
        {/* <div className="relative w-[1028px] h-[100px] mb-[500px]">
          <div className="absolute z-10 h-full left-0">
            <Image
              className={clsx("mt-7", "z-10", "w-full")}
              src="/App-mockup-lg.svg"
              width={1200}
              height={100}
              alt="mockup phone screen lg"
            ></Image>
          </div>

          <div
            className={clsx(
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
                "flex-col",
                "pr-10",
              )}
            >
              <p className={clsx("text-h3", "text-accent2")}>
                Cómo funciona
              </p>
              <Image
                className={clsx("mt-7 mb-0", "md:mt-4")}
                src="/Video-cover.svg"
                width={350}
                height={100}
                alt="¿Cómo funciona? video cover"
              ></Image>
            </div>
            <div
              className={clsx(
                "flex",
                "items-end",
                "justify-center",
                "flex-col",
                "flex",
                "flex-col-reverse",
                "ml-2",
              )}
            >
              <p className={clsx("text-accent2", "text-h3")}>
                Agregando experiencias
              </p>
              <Image
                className={clsx("mt-4", "z-10")}
                src="/Video-cover2.svg"
                width={350}
                height={100}
                alt="Agregando experiencias video cover"
              ></Image>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

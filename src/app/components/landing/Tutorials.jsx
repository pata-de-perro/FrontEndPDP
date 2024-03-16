import clsx from "clsx";

export default function Tutorials() {
  return (
    <div id="tutorials"
      className={clsx(
        "w-auto",
        "full-size",
        "flex flex-col flex-wrap",
        "md:h-[500px]"
      )}
    >
      <div
        className={clsx(
          "flex flex-col",
          "items-center",
          "md:flex-row md:flex-row-reverse",
          "lg:sr-only"
        )}
      >
        <div className={clsx("flex", "flex-col-reverse", "md:items-start")}>
          <div
            className={clsx(
              "flex flex-col",
              "items-center justify-center",
              "md:order-last md:items-start md:mb-8"
            )}
          >
            <p className={clsx("text-h3", "text-accent2")}>Cómo funciona</p>
            <img
              className={clsx("mt-7", "md:mt-4")}
              src="/Video-cover.svg"
              width={350}
              height={100}
              alt="VIDEO COVER 1"
            />
          </div>
          <div
            className={clsx(
              "flex flex-col flex-col-reverse",
              "items-center justify-center",
              "sr-only",
              "md:not-sr-only md:items-start"
            )}
          >
            <p className={clsx("text-accent2", "text-h3", "deop-shadow-2xl")}>
              Agregando experiencias
            </p>
            <img
              className={clsx("mt-4", "z-10")}
              src="/Video-cover2.svg"
              width={350}
              height={100}
              alt="VIDEO COVER 2"
            />
          </div>
        </div>
        <img
          className={clsx("z-40", "sm:not-sr-only", "md:sr-only")}
          src="/App-mockup-sm.svg"
          width={500}
          height={100}
          alt="mockup phone screen sm"
        />
        <img
          className={clsx("z-40", "sr-only", "md:not-sr-only")}
          src="/App-mockup-md.svg"
          width={500}
          height={100}
          alt="Hand with phone screen lg"
        />
        <div
          className={clsx("flex", "items-center", "justify-center", "flex-col")}
        >
          <div
            className={clsx(
              "flex flex-col",
              "items-center",
              "w-[400px]",
              "justify-center",
              "sm:not-sr-only",
              "md:sr-only",
            )}
          >
            <p className={clsx("text-accent2", "text-h3", "deep-shadow-2xl")}>
              Agregando experiencias
            </p>
            <img
              className="mt-4"
              src="/Video-cover2.svg"
              width={500}
              height={100}
              alt="VIDEO COVER 2"
            />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "flex flex-row",
          "sr-only",
          "full-size",
          "relative",
          "justify-center",
          "lg:not-sr-only",
        )}
      >
        <div className="relative w-[1028px] h-[500px]">
          <div className="absolute z-10 h-full left-0">
            <img
              className={clsx(
                "z-10", 
                "w-full",)}
              src="/App-mockup-lg.svg"
              width={1200}
              height={100}
              alt="mockup phone screen lg"
            />
          </div>

          <div
            className={clsx(
              "flex justify-end",
              "full-size",
              "pt-10",
            )}
          >
            <div
              className={clsx(
                "flex items-center",
              )}
            >
              <div className={clsx(
                "flex flex-col flex-col-reverse",
                "items-center",
                "px-6"
              )}>
                <p className={clsx("text-h3", "text-accent2", "mt-4")}>Cómo funciona</p>
                <img
                  className={clsx("mt-7 mb-0", "md:mt-4")}
                  src="/Video-cover.svg"
                  width={350}
                  height={100}
                  alt="¿Cómo funciona? video cover"
                />
              </div>

              <div className={clsx(
                "flex flex-col flex-col-reverse",
                "items-center",
              )}>
                <p className={clsx("text-accent2", "text-h3", "mt-4")}>
                  Agregando experiencias
                </p>
                <img
                  className={clsx(
                    "mt-4", 
                  )}
                  src="/Video-cover2.svg"
                  width={350}
                  height={100}
                  alt="Agregando experiencias video cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

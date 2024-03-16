import clsx from "clsx";

export default function Functions() {
  return (
    <div id="functions"
      className={clsx(
        "w-auto",
        "flex flex-wrap items-center justify-center",
        "lg:mb-48",
        "md:mb-40",
      )}
    >
      <div
        className={clsx(
          "my-24",
          "flex flex-col items-center justify-center",
          "md:flex-row",
        )}
      >
        <h1
          className={clsx(
            "text-h1 font-heading text-wrap text-accent2"
          )}
        >
          Algunas de nuestras funciones
        </h1>
      </div>
      <div className={clsx("size-full", "relative", "flex justify-center")}>
        <img
          className={clsx("md:sr-only", ) }
          src="/Road2.svg"
          width={800}
          height={100}
          alt="Vertical road pic"
        />
          <img
          className={clsx("mb-40","sr-only" ,"md:not-sr-only", "lg:sr-only", "w-[800px]")}
          src="/Road1.svg"
          width={800}
          height={200}
          alt="Vertical road pic"
        />
         <img
          className={clsx("mb-15", "sr-only", "lg:not-sr-only" )}
          src="/Road1.svg"
          width={2000}
          height={200}
          alt="Vertical road pic"
        />
       
      </div>
    </div>
  );
}

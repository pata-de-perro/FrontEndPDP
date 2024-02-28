import clsx from "clsx";
import Image from "next/image";

export default function Functions() {
  return (
    <div
      className={clsx(
        "w-auto",
        "flex flex-wrap",
        "items-center justify-center",
        "lg:mb-48",
        "md:mb-40",
      )}
    >
      <div
        className={clsx(
          "flex flex-col",
          "my-24",
          "items-center justify-center",
          "md:flex-row",
        )}
      >
        <p
          className={clsx(
            "text-h1",
            "font-heading",
            "text-wrap",
            "text-accent2"
          )}
        >
          Algunas de 
        </p>
        <p
          className={clsx(
            "text-h1",
            "font-heading",
            "text-wrap",
            "text-accent2",
            "md:pl-2",
          )}
        >
          nuestras funciones
        </p>
      </div>
      <div className={clsx("size-full", "relative", "flex justify-center")}>
        <Image
          className={clsx("mt-7", "md:sr-only", ) }
          src="/Vertical-road.svg"
          width={800}
          height={100}
          alt="Vertical road pic"
        />
          <Image
          className={clsx("mb-40","sr-only" ,"md:not-sr-only", "lg:sr-only", "w-[800px]")}
          src="/Horizontal-road-md.svg"
          width={800}
          height={200}
          alt="Vertical road pic"
        />
         <Image
          className={clsx("mb-15", "sr-only", "lg:not-sr-only" )}
          src="/Horizontal-road-lg.svg"
          width={2000}
          height={200}
          alt="Vertical road pic"
        />
       
      </div>
    </div>
  );
}

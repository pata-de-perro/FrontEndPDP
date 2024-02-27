import clsx from "clsx";
import Image from "next/image";

export default function SecondCallToAction() {
  return (
    <div
      className={clsx(
        "bg-accent1",
        "w-auto",
        "flex",
        "items-center",
        "justify-center",
        "flex-wrap",
        "md:h-[400px]",
        "lg:h-[500px]"
        
       
      )}
    >
      <div
        className={clsx(
          "my-3.5",
          "size-full",
          "flex",
          "items-center",
          "justify-center",
          "flex-col",
          "md:flex-row", 
          "md:flex-row-reverse", 
         
        )}
      >
        <div className={clsx(
          
        )}></div>
        <div className={clsx("my-3.5", "size-full", "h-48", "w-80", "md:w-[350px]", "lg:h-[500px]","lg:w-[600px]")}>
          <Image
          className={clsx(
            "md:h-[210px]","md:w-[350px]",
            "lg:h-[500px]","lg:w-[600px]"
            
          )}
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
            "flex-col",
            "w-80",
            "mt-3",
            "md:place-items-start", 
            "lg:w-[481px]"
            
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
          <p
            className={clsx(
              "text-h1",
              "font-heading",
              "text-wrap",
              "text-[#253A74]"
            )}
          >
            planeando y más
          </p>
          <p
            className={clsx(
              "text-h1",
              "font-heading",
              "text-wrap",
              "text-[#253A74]"
            )}
          >
            disfrutando
          </p>
          <div
          className={clsx(
            "flex",
            "items-center",
            "justify-center",
            " flex-col",
            "max-w-80",
            "w-80",
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
            "rounded-full",
            "bg-accent2",
            "text-heading text-white",
            "my-8",
            "justify-center",
            "md:w-[159px]",
            "md:h-[36px]"
            
          )}
        >
          ¡Registrate!
        </button>
        </div>
      
      </div>
    </div>
  );
}

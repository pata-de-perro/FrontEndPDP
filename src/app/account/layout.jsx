import clsx from "clsx";

export default function Auth({ children }) {
  return (
    <>
      <main className={clsx(
        "w-[full] h-screen", 
        "md:flex-none md:item-start",
        "lg:flex lg:justify-center lg:items-center",
        )}>
        <div
          className={clsx(
            "flex flex-wrap justify-center",
            "lg:flex-nowrap lg:w-[1280px]",
            "lg:justify-center"
          )}
        >
          <img
            src="/World.svg"
            width={316}
            height={316}
            alt="World image"
            className="absolute left-[-50px] top-[-150px] -z-10 justify-self-start"
          />
          <div
            className={clsx(
              "flex justify-center",
              "md:pb-[15px] md:flex-row md:justify-start",
              "lg:flex-wrap lg:w-[500px]"
            )}
          >
            <img
              src="/Login-cuate-1.svg"
              width={329}
              height={329}
              alt="progresive app pana"
              className={clsx(
                "w-[319px] pt-[45px] sr-only",
                "md:not-sr-only md:w-[329px] md:h-[329px]",
                "lg:w-[400px] lg:h-[400px] lg:self-end"
              )}
            />
            <div className="md:grid md:content-center md:w-[350px] lg:content-start lg:w-[500px]">
              <div className="grid justify-items-center md:justify-items-start lg:flex">
                <p className={clsx("text-h1 text-azulGris900", "font-heading", "mt-4 md:mt-0 lg:mt-0")}>
                  Bienvenido a{" "}
                </p>
                <p
                  className={clsx(
                    "pl-4",
                    "text-h1 text-primary",
                    "font-heading",
                    "justify-center",
                    "md:justify-items-start md:pl-0",
                    "lg:pl-4",
                  )}
                >
                  dePataDePerro
                </p>
              </div>
              <p className={clsx(
                "font-body text-regular w-[360px] text-center",
                "mt-8",
                "md:text-left md:w-[300px] md:mt-0",
                "lg:w-[400px] lg:mt-0",
              )}>
                Organiza tu viaje, guarda puntos de interés y comparte el
                itinerario con todos tus compañeros de viaje.
              </p>
            </div>
          </div>
          <div
            className={clsx(
              "w-[90vw] mb-[15px]",
              "lg:my-[0px] lg:mx-[15px] border-azulGris50 md:border-b lg:border-b-0 lg:border-l",
              "lg:w-[35px]"
            )}
          ></div>
          <div
            className={clsx(
              "grid justify-items-center",
              "pb-[15px]",
              "lg:justify-items-start"
            )}
          >
            <div>{children}</div>

            <p className="text-center text-xs font-body text-azulGris500 w-[450px]">
              Al seguir usando una cuenta en México, aceptas los Términos de uso
              y confirmas que has leído la Política de privacidad.
            </p>
          </div>
          <img
            src="/World.svg"
            width={350}
            height={350}
            alt="World image"
            className="absolute right-0 bottom-0 -z-10 justify-self-start"
          />
        </div>
      </main>
    </>
  );
}

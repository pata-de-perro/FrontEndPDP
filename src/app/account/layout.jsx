import clsx from "clsx";



export default function Auth({ children }) {
  return (
    <>
      <main
        className={clsx(
          "w-[100wv]",
          "flex justify-center content-center",
        )}
      >
      <div
        className={clsx(
          "flex",
          "flex-wrap",
          "lg:flex-nowrap",
          "justify-center",
          "p-[20px]",
          "lg:w-[1280px] lg:mt-[30px] lg:justify-center",
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
            "lg:flex-wrap",
            "lg:w-[500px]"
          )}
        >
          <img
            src="/Login-cuate-1.svg"
            width={329}
            height={329}
            alt="progresive app pana"
            className={clsx(
              "w-[319px]",
              "pt-[45px]",
              "sr-only",
              "md:not-sr-only",
              "md:w-[329px] md:h-[329px]",
              "lg:w-[400px] lg:h-[400px]",
              "lg:self-end"
            )}
          />
          <div className="md:grid md:content-center md:w-[350px] lg:content-start lg:w-[500px]">
            <div className="grid justify-items-center md:justify-items-start lg:flex">
              <p className={clsx("text-h1 text-azulGris900", "font-heading")}>
                Bienvenido a{" "}
              </p>
              <p
                className={clsx(
                  "pl-[3px]",
                  "text-h1 text-primary",
                  "font-heading",
                  "justify-center",
                  "md:justify-items-start"
                )}
              >
                PataDePerro
              </p>
            </div>
            <p className="font-body text-regular w-[360px] text-center md:text-left md:w-[300px] lg:w-[400px]">
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

          <p className="text-center text-regular font-body text-azulGris500 w-[450px] p-[5px]">
            Al seguir usando una cuenta en México, aceptas los Términos de uso y
            confirmas que has leído la Política de privacidad.
          </p>
        </div>
        <img
          src="/World.svg"
          width={450}
          height={450}
          alt="World image"
          className="absolute right-0 bottom-0 -z-10 justify-self-start"
        />
      </div>
      </main>
    </>
  );
}

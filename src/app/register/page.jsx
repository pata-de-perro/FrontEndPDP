import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main
      className={clsx(
        "flex",
        "flex-wrap",
        "lg:flex-nowrap",
        "justify-center",
        "p-[20px]",
        "lg:w-[1280px] lg:mt-[30px] lg:justify-center"
      )}
    >
      <Image
        src="/World.svg"
        width={316}
        height={316}
        alt="World image"
        className="absolute left-[-50px] top-[-150px] z-0 justify-self-start shrink"
      />
      <div
        className={clsx(
          "justify-center",
          "pb-[15px]",
          "md:grid md:grid-cols-2 md:pb-[0px]",
          "lg:flex lg:flex-wrap"
        )}
      >
          <Image
            src="/Login-cuate-1.svg"
            width={329}
            height={329}
            alt="progresive app pana"
            className={clsx(
              "w-[319px]",
              "pt-[45px]",
              "sr-only",
              "md:not-sr-only",
              "lg:w-[600px] lg:h-[600px]",
              "lg:items-end lg:self-end"
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
            Organiza tu viaje, guarda puntos de interés y comparte el itinerario
            con todos tus compañeros de viaje.
          </p>
        </div>
      </div>
      <div
        className={clsx(
          "w-[90vw] border-b border-azulGris50 my-[15px]",
          "lg:my-[0px] lg:mx-[25px] lg:border-b-0 lg:border-l-2 lg:w-1"
        )}
      ></div>
      <div className="grid justify-items-center pb-[15px]">
        <p className="text-h1 font-heading text-center text-azulGris900 pt-[15px]">
          Inicia sesión en
        </p>
        <Link href="/">
          <Image
            src="/dePataDePerroLogo.svg"
            width={250}
            height={50}
            alt="Logo Pata de Perro"
            className="lg:w-[420px] lg:h-[111px]"
          />
        </Link>
        <button
          className={clsx(
            "border border-azulGris600",
            "w-[300px] p-[15px] my-[34px]",
            "flex justify-center",
            "items-center",
            "rounded-lg"
          )}
        >
          <Image src="/Google.svg" width={25} height={25} alt="Google logo" />
          <p className="font-body text-regularSemiBold">Continuar con Google</p>
        </button>

        <input
          type="username"
          name="username"
          className={clsx(
            "mt-1 px-3 py-2",
            "h-[50px]",
            "bg-white",
            "border shadow-sm border-slate-300",
            "placeholder-slate-400",
            "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
            "block w-[450px] rounded-lg focus:ring-1"
          )}
          placeholder="Nombre"
        />
        <input
          type="email"
          name="email"
          className={clsx(
            "mt-[27px] px-3 py-2",
            "h-[50px]",
            "bg-white",
            "border shadow-sm border-slate-300",
            "placeholder-slate-400",
            "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
            "block w-[450px] rounded-lg focus:ring-1"
          )}
          placeholder="Correo electrónico"
        />
        <input
          type="password"
          name="password"
          className={clsx(
            "mt-[27px] px-3 py-2",
            "bg-white",
            "border shadow-sm border-slate-300",
            "placeholder-slate-400",
            "focus:outline-none focus:border-sky-45 focus:ring-sky-500",
            "block w-[450px] h-[50px] rounded-lg focus:ring-1"
          )}
          placeholder="Contraseña"
        />
        <input
          type="passwordConfirmation"
          name="passwordConfirmation"
          className={clsx(
            "mt-[27px] px-3 py-2",
            "bg-white",
            "border shadow-sm border-slate-300",
            "placeholder-slate-400",
            "focus:outline-none focus:border-sky-45 focus:ring-sky-500",
            "block w-[450px] h-[50px] rounded-lg focus:ring-1"
          )}
          placeholder="Confirma tu contraseña"
        />
        <button
          className={clsx(
            "bg-primary",
            "text-white text-regular",
            "px-[8px] py-[8px]",
            "mb-[15px] mt-[60px]",
            "w-[450px]",
            "rounded-md",
            "flex justify-center",
            "hover:bg-accent1 hover:text-accent2",
            "border-2 border-primary hover:border-accent1"
          )}
        >
          Registrarte
        </button>
        <p className="text-center text-regular font-body text-azulGris500 w-[450px] p-[5px]">
          Al seguir usando una cuenta en México, aceptas los Términos de uso y
          confirmas que has leído la Política de privacidad.
        </p>
      </div>
    </main>
  );
}

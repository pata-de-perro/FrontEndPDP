import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main
      className={clsx(
        "flex",
        "flex-wrap",
        "md:flex-nowrap",
        "justify-center",
        "p-[20px]"
      )}
    >
      <Image
        src="/World.svg"
        width={316}
        height={316}
        alt="World image"
        className="absolute left-[-50px] top-[-150px] z-0 justify-self-start"
      />
      <div
        className={clsx(
          "justify-center",
          "border-b-2 border-azulGris50",
          "pb-[15px] mb-[15px]"
        )}
      >
        <Image
          src="/Login-cuate-1.svg"
          width={329}
          height={329}
          alt="progresive app pana"
          className={clsx("w-[319px]", "pt-[45px]")}
        />
        <div className="grid justify-items-center">
          <p className={clsx("text-h1 text-azulGris900", "font-heading")}>
            Bienvenido a{" "}
          </p>
          <p
            className={clsx(
              "pl-[3px]",
              "text-h1 text-primary",
              "font-heading",
              "justify-center"
            )}
          >
            PataDePerro
          </p>
        </div>
        <p className="font-body text-regular w-[360px] text-center">
          Organiza tu viaje, guarda puntos de interés y comparte el itinerario
          con todos tus compañeros de viaje.
        </p>
      </div>
      <div className="grid justify-items-center">
        <p className="text-h1 font-heading text-center text-azulGris900">
          Inicia sesión en
        </p>
        <Image
          src="/dePataDePerroLogo.svg"
          width={250}
          height={50}
          alt="Logo Pata de Perro"
        />
        <p className="text-regular font-body text-center text-azulGris900">
          ¿Eres un nuevo usuario?
        </p>
        <p className="text-regularBold font-body text-center text-azulGris900">
          <Link href="/register">¡Registrate ahora!</Link>
        </p>
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
        <div className="flex justify-center items-center m-[34px]">
          <p className="px-[10px]">----</p>
          <p className="text-regular font-body text-center text-azulGris900 w-[200px]">
            O entra con tu correo electrónico y contraseña
          </p>
          <p className="px-[10px]">----</p>
        </div>
        <input
          type="email"
          name="email"
          className={clsx(
            "mt-1 px-3 py-2",
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
        <p className="text-link font-body text-azulGris900 justify-self-start mt-[32px]">
          ¿Olvidaste tu contraseña?
        </p>
        <p className="text-link font-body text-azulGris900 justify-self-start">
          Recuperar contraseña
        </p>
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
          Entrar
        </button>
        <p className="text-center text-regular font-body text-azulGris500 w-[450px] p-[5px]">
          Al seguir usando una cuenta en México, aceptas los Términos de uso y
          confirmas que has leído la Política de privacidad.
        </p>
      </div>
    </main>
  );
}

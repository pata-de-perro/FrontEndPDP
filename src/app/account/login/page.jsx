"use client";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { PerformLogin } from "@/app/components/account";

export default function LoginPage() {
  return (
    <>
      <div
        className={clsx("grid justify-items-center", "pb-[15px]", "lg:justify-items-start")}
      >
        <p className="text-h1 font-heading text-center text-azulGris900 pt-[15px]">
          Inicia sesión en
        </p>
        <Link href="/">
          <img
            src="/dePataDePerroLogo.svg"
            alt="Logo Pata de Perro"
            className="w-[250px] h-[50px] lg:w-[420px] lg:h-[auto]"
          />
        </Link>
        <p
          className={clsx(
            "text-regular font-body",
            "text-center text-azulGris900"
          )}
        >
          ¿Eres un nuevo usuario?
        </p>
        <p
          className={clsx(
            "text-regularBold font-body",
            "text-center text-azulGris900"
          )}
        >
          <Link href="/account/register">¡Registrate ahora!</Link>
        </p>

        {/* We will work on the google login if we got time */}

        {/* <button
          className={clsx(
            "border border-azulGris600",
            "w-[300px] p-[15px] my-[15px]",
            "flex justify-center",
            "items-center",
            "rounded-lg"
          )}
        >
          <Image src="/Google.svg" width={25} height={25} alt="Google logo" />
          <p className="font-body text-regularSemiBold">Continuar con Google</p>
        </button>
        <div className="flex justify-center items-center m-[15px]">
          <p className="px-[10px]">----</p>
          <p className="text-regular font-body text-center text-azulGris900 w-[200px] md:w-[250px]">
            O entra con tu correo electrónico y contraseña
          </p>
          <p className="px-[10px]">----</p>
        </div> */}
        <PerformLogin />
      </div>
    </>
  );
}

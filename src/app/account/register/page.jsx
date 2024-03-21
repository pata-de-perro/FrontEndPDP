"use client";
import Link from "next/link";
import clsx from "clsx";
import { CreateRegister } from "@/app/components/account";

export default function RegisterPage() {
  return (
    <>
      <div         
      className={clsx("grid justify-items-center", "pb-[15px]", "lg:justify-items-start")}>
        <p className="text-h1 font-heading text-center text-azulGris900 pt-[15px]">
          Regístrate en
        </p>
        <Link href="/">
        <img
            src="/dePataDePerroLogo.svg"
            alt="Logo Pata de Perro"
            className="w-[250px] h-[50px] lg:w-[420px] lg:h-[auto]"
          />
        </Link>
      </div>
      <p className="text-regular font-body text-center text-azulGris900">
        ¿Ya eres usuario?
      </p>
      <p className="text-regularBold font-body text-center text-azulGris900">
        <Link href="/account/login">¡Inicia sesión ahora!</Link>
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
          <img src="/Google.svg" width={25} height={25} alt="Google logo" />
          <p className="font-body text-regularSemiBold">Continuar con Google</p>
        </button>
        <div className="flex justify-center items-center m-[15px]">
          <p className="px-[10px]">----</p>
          <p className="text-regular font-body text-center text-azulGris900 w-[200px] md:w-[250px]">
            O registrate con tu correo electrónico
          </p>
          <p className="px-[10px]">----</p>
        </div> */}
      <CreateRegister />
    </>
  );
}

import Link from "next/link";
import { CreateRegister } from "@/components/account";
import clsx from "clsx";

export default function RegisterPage() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-1 justify-items-center lg:justify-items-start">
        <h1 className="text-h1 font-heading text-center text-azulGris900">
          Regístrate en
        </h1>
        <Link href="/">
          <img
            src="/PDPLogo.svg"
            width={200}
            height={35}
            alt="Logo Pata de Perro"
            className="lg:w-[auto] lg:h-[80px]"
          />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start ">
        <p className="text-regular font-body text-center text-azulGris900 lg:text-start ">
          ¿Ya eres usuario?
        </p>
        <p className={clsx(
          "text-regularBold font-body text-center text-azulGris900 ml-0 lg:ml-4",
          "lg:text-start"
        )}>
          <Link href="/account/login">¡Inicia sesión ahora!</Link>
        </p>
      </div>
        <CreateRegister />
    </>
  );
}
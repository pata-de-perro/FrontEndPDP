import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { PerformLogin } from "@/components/account";

export default function LoginPage() {
  return (
    <>
      <div
        className={clsx(
          "grid justify-items-center",
          "pb-[15px]",
          "lg:justify-items-start"
        )}
      >
        <h1 className="text-h1 font-heading text-center text-azulGris900 pt-[15px]">
          Inicia sesión en
        </h1>
        <Link href="/">
          <Image
            src="/PDPLogo.svg"
            width={250}
            height={50}
            alt="Logo Pata de Perro"
            className="lg:w-[420px] lg:h-[auto]"
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

        <PerformLogin />
      </div>
    </>
  );
}

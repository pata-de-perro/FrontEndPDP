import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PerformLogin } from "@/components/account";
import clsx from "clsx";

export default async function LoginPage() {
  const user = await getServerSession(authOptions);
  if (user) {
    redirect("/pdp");
  }

  return (
    <>
      <div className={clsx(
        "grid justify-items-center",
        "md:grid-cols-2 md:justify-items-center", 
        "lg:grid-cols-1 lg:justify-items-start"
      )}>
        <h1 className="text-h1 font-heading text-center text-azulGris900 pt-[15px]">
          Inicia sesión en
        </h1>
        <Link href="/">
          <img
            src="/PDPLogo.svg"
            width={250}
            height={50}
            alt="Logo Pata de Perro"
            className="lg:w-[auto] lg:h-[80px]"
          />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row">
        <p className="text-regular font-body text-center text-azulGris900 lg:text-start ">
          ¿Eres un nuevo usuario?
        </p>
        <p className="text-regularBold font-body text-center text-azulGris900 lg:ml-4">
          <Link href="/account/register">¡Registrate ahora!</Link>
        </p>
      </div>
      <PerformLogin />
    </>
  );
}

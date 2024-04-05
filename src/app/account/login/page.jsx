import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PerformLogin } from "@/components/account";

export default async function LoginPage() {
  const user = await getServerSession(authOptions);
  if (user) {
    redirect("/pdp");
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-1 justify-items-center lg:justify-items-start">
        <h1 className="text-h1 font-heading text-center text-azulGris900 pt-[15px]">
          Inicia sesión en
        </h1>
        <Link href="/">
          <img
            src="/PDPLogo.svg"
            width={250}
            height={50}
            alt="Logo Pata de Perro"
            className="lg:w-[420px] lg:h-[auto]"
          />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row">
        <p className="text-regular font-body text-center text-azulGris900">
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

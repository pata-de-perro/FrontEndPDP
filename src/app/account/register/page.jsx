import Link from "next/link";
import { CreateRegister } from "@/components/account";

export default function RegisterPage() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-1">
        <h1 className="text-h1 font-heading text-center text-azulGris900 pt-[15px]">
          Regístrate en
        </h1>
        <Link href="/">
          <img
            src="/PDPLogo.svg"
            width={200}
            height={35}
            alt="Logo Pata de Perro"
            className="lg:w-[420px] lg:h-[auto]"
          />
        </Link>
      </div>
      <p className="text-regular font-body text-center text-azulGris900">
        ¿Ya eres usuario?
      </p>
      <p className="text-regularBold font-body text-center text-azulGris900">
        <Link href="/account/login">¡Inicia sesión ahora!</Link>
      </p>
      <CreateRegister />
    </>
  );
}

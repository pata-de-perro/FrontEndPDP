import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth } from "@/components/layouts";
import { ReviewPlans } from "@/components/events";
import { BtnToLink } from "@/components/common";

export default async function HomePage() {
  const { user } = await getServerSession(authOptions);

  return (
    <>
      <HeroAuth title="¡Facilitando tus planes!" urlImg="/Reminders-bro.svg">
        <p>
          Queremos que el planear tu viaje o salida sea lo más fácil posible. En
          Pata de Perro puedes guardar diferentes ubicaciones segun su
          categoría.
        </p>
        <BtnToLink url="/pdp/events/create" name="Planea un evento" />
      </HeroAuth>
      <ReviewPlans user={user} />
    </>
  );
}

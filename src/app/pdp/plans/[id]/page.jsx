import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth } from "@/components/layouts";
import { ContainerPlan } from "@/components/plans";

export default async function PlanEventPage({ params }) {
  const { user } = await getServerSession(authOptions);

  return (
    <>
      <HeroAuth title="¡Realiza tú plan!" urlImg="/World-bro.svg">
        <p>
          Descubre los lugares que te gustaria visitar u las opciones que tienes
          para hospedarte, el listado de opciones es tu aliado para que puedas
          agregarlas y una vez que estes listo, gardarlas en tu evento.
        </p>
      </HeroAuth>
      <ContainerPlan idPlan={params.id} user={user} />
    </>
  );
}

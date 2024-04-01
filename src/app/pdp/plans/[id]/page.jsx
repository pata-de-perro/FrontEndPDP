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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </HeroAuth>
      <ContainerPlan idPlan={params.id} user={user} />
    </>
  );
}

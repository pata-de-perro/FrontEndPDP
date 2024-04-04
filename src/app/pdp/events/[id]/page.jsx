import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth } from "@/components/layouts";
import { ContainerEvent } from "@/components/events";

export default async function EventPage({ params }) {
  const eventId = params.id;
  const { user } = await getServerSession(authOptions);

  return (
    <>
      <HeroAuth
        title="¡Verifica tú plan!"
        urlImg="/World-amico.svg"
        type="primary"
      ></HeroAuth>
      <ContainerEvent />
    </>
  );
}

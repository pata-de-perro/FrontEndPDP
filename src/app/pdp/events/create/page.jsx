import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth } from "@/components/layouts";
import { CreateEvent } from "@/components/events";

export default async function CreateEventPage() {
  const { user } = await getServerSession(authOptions);

  return (
    <>
      <HeroAuth
        title="¡Háblanos sobre tu evento!"
        urlImg="/Globalization-amico.svg"
      >
        <p>
          Queremos que el planear tu viaje o salida sea lo más fácil posible.
        </p>
      </HeroAuth>
      <CreateEvent user={user} />
    </>
  );
}

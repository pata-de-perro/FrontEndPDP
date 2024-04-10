import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth } from "@/components/layouts";
import { CreateEvent } from "@/components/events";
import { CreationInstructions } from "@/components/events"

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
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-start md:justify-items-center ">
        <CreateEvent user={user} />
        <CreationInstructions />
      </div>
    </>
  );
}

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth } from "@/components/layouts";
import { ReviewEvents } from "@/components/events";

export default async function EventsPage() {
  const { user } = await getServerSession(authOptions);

  return (
    <>
      <HeroAuth title="¡Sigamos planificando!" urlImg="/Journey-amico.svg">
        <p>
          Visualiza fácilmente todas las cosas que deseas realizar en tu viaje.
        </p>
      </HeroAuth>
      <ReviewEvents />
    </>
  );
}

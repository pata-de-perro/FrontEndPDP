import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getPlacesEventApi } from "@/services";
import { HeroAuth } from "@/components/layouts";
import { ContainerEvent, ShowInfoEventHero } from "@/components/events";

export default async function EventPage({ params }) {
  const eventId = params.id;
  const { user } = await getServerSession(authOptions);
  const { data: event } = await getPlacesEventApi(eventId, user.accessToken);

  return (
    <>
      <HeroAuth
        title="¡Verifica tú plan!"
        urlImg="/World-amico.svg"
        type="primary"
      >
        <ShowInfoEventHero event={event} />
      </HeroAuth>
      <ContainerEvent event={event} />
    </>
  );
}

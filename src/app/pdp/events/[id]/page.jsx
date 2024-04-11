import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getPlacesEventApi } from "@/services";
import { HeroAuth } from "@/components/layouts";
import { ContainerEvent, ShowInfoEventHero } from "@/components/events";

export default async function EventPage({ params }) {
  const { user } = await getServerSession(authOptions);
  const { data: event } = await getPlacesEventApi(params.id, user.accessToken);

  if (!event) {
    redirect("/pdp");
  }
  
  return (
    <>
      <HeroAuth
        title="¡Verifica tú plan!"
        urlImg="/World-amico.svg"
        type="primary"
      >
        <ShowInfoEventHero event={event} />
      </HeroAuth>
      <ContainerEvent event={event} user={user} />
    </>
  );
}

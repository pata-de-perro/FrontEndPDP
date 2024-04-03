import { getUserEventsApi } from "@/services";
import { TitleSection } from "@/components/layouts";
import { NotEvents, PlansContainer } from "@/components/events";

export async function ReviewPlans({ user }) {
  const { data: events } = await getUserEventsApi(user.id, user.accessToken);

  return (
    <>
      <TitleSection title="Revisa tus planes" urlIcon="/Icono-Fecha.svg" />
      {(events === undefined || events?.length === 0) && (
        <NotEvents
          title={
            events === undefined ? "Sin información" : "Sin registro de planes"
          }
        />
      )}
      <PlansContainer data={events} />
    </>
  );
}

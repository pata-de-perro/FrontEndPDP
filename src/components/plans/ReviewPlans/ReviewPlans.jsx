import clsx from "clsx";
import { getUserEventsApi } from "@/services";
import { TitleSection } from "@/components/layouts";
import { NotEvents } from "@/components/common";
import { ListPlans } from "@/components/plans";

export async function ReviewPlans({ user }) {
  const { data: events } = await getUserEventsApi(user.id, user.accessToken);

  return (
    <div className={clsx("mt-10 mr-4")}>
      <TitleSection title="Revisa tus planes" urlIcon="/Icono-Fecha.svg" />
      {(events === undefined || events?.length === 0) && (
        <NotEvents
          title={
            events === undefined ? "Sin información" : "Sin registro de planes"
          }
        />
      )}
      <ListPlans data={events} />
    </div>
  );
}

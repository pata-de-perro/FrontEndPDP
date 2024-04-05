import clsx from "clsx";
import { getUpcomingEventsByUserApi } from "@/services";
import { TitleSection } from "@/components/layouts";
import { NotEvents } from "@/components/common";
import { ListPlans } from "@/components/plans";

export async function ReviewPlans({ user }) {
  const { id: userId, accessToken } = user;

  const { data: events } = await getUpcomingEventsByUserApi(
    userId,
    accessToken
  );

  return (
    <div className={clsx("mt-10 mr-4")}>
      <TitleSection
        title="Revisa tus próximos planes"
        urlIcon="/Icono-Fecha.svg"
      />
      {(events === undefined || events?.length === 0) && (
        <NotEvents
          title={events === undefined ? "Sin planes" : "Sin planes próximos"}
        />
      )}
      <ListPlans data={events} />
    </div>
  );
}

import clsx from "clsx";
import { getUserEventsApi } from "@/services";
import { TitleSection } from "@/components/layouts";
import { NotEvents } from "@/components/common";
import { ListPlans } from "@/components/plans";
import {
  AiTwotoneCalendar,
} from "react-icons/ai";


export async function ReviewEvents({ user }) {
  const { id, accessToken } = user;
  const { data: events } = await getUserEventsApi(id, accessToken);

  return (
    <div className={clsx("mr-4")}>
      <TitleSection
        title="Revisa tus viajes y/o salidas"
        urlIcon={<AiTwotoneCalendar />}
      />
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

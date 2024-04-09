import clsx from "clsx";
import { TitleSection } from "@/components/layouts";
import { ActionsEvent, MainPlacesEvent } from "@/components/events";
import { FiMap } from "react-icons/fi";
const MAP_ID = process.env.ID_MAP_GOOGLE;

export function ContainerEvent({ event, user }) {
  return (
    <div className={clsx("mr-6")}>
      <div className={clsx("flex items-center justify-between")}>
        <TitleSection
          title="Revisa tu mapa"
          urlIcon={<FiMap />}
          type="primary"
        />
        <ActionsEvent user={user} event={event} />
      </div>
      <MainPlacesEvent event={event} mapId={MAP_ID} />
    </div>
  );
}

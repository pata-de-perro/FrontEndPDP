import clsx from "clsx";
import { TitleSection } from "@/components/layouts";
import { ActionsEvent, MainPlacesEvent } from "@/components/events";

const MAP_ID = process.env.ID_MAP_GOOGLE;

export function ContainerEvent({ event }) {
  return (
    <div className={clsx("mr-6")}>
      <div className={clsx("flex items-center justify-between")}>
        <TitleSection
          title="Revisa tu mapa"
          urlIcon="/location_on.svg"
          type="primary"
        />
        <ActionsEvent />
      </div>
      <MainPlacesEvent event={event} mapId={MAP_ID} />
    </div>
  );
}

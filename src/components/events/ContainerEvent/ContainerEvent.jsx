import clsx from "clsx";
import { TitleSection } from "@/components/layouts";
import { MainPlacesEvent } from "@/components/events";
const MAP_ID = process.env.ID_MAP_GOOGLE;

export function ContainerEvent({ event }) {
  return (
    <div className={clsx("mt-4 mr-6")}>
      <TitleSection
        title="Revisa tu lugares elejidos"
        urlIcon="/location_on.svg"
      />
      <MainPlacesEvent event={event} mapId={MAP_ID} />
    </div>
  );
}

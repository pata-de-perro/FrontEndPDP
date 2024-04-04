import { GoogleMap } from "@/components/maps";
import clsx from "clsx";

export function MainPlacesEvent({ event, mapId }) {
  const { coordsEvent, locations } = event;
  const ubicationMap = { lat: coordsEvent[0], lng: coordsEvent[1] };

  return (
    <main className={clsx("h-[600px]", "flex flex-col gap-4", "mt-4")}>
      <section className={clsx("h-full", "flex justify-between gap-4")}>
        <aside className={clsx("bg-primary/10", "w-1/4", "rounded-xl", "p-2")}>
          <ul>
            {locations?.map((place) => (
              <li key={place._id}>
                <span className="text-xs font-medium">{place.name}</span>
                <p className="text-xs">{place.simpleAddress}</p>
              </li>
            ))}
          </ul>
        </aside>
        <section className={clsx("w-3/4")}>
          <GoogleMap
            ubicationMap={ubicationMap}
            mapId={mapId}
            locations={locations}
          ></GoogleMap>
        </section>
      </section>
      <section className={clsx("h-5", "bg-secondary", "rounded-xl")}></section>
    </main>
  );
}

import { GoogleMap } from "@/components/maps";
import { placesOfInterestMenu } from "@/mocks/catalogs";
import clsx from "clsx";

export function MainPlacesEvent({ event, mapId }) {
  const { coordsEvent, locations } = event;
  const ubicationMap = { lat: coordsEvent[0], lng: coordsEvent[1] };

  return (
    <main className={clsx("h-[700px]", "flex flex-col gap-4", "mt-4")}>
      <section className={clsx("h-full", "flex justify-between gap-4")}>
        <section className={clsx("w-3/4")}>
          <GoogleMap
            ubicationMap={ubicationMap}
            mapId={mapId}
            locations={locations}
          ></GoogleMap>
        </section>
        <aside
          className={clsx("bg-secondary/10", "w-1/4", "rounded-xl", "p-2")}
        >
          <div className={clsx("flex flex-col")}>
            {placesOfInterestMenu.map((placeMenuCategory) => (
              <div key={placeMenuCategory.key} className={clsx("mb-3")}>
                <div className={clsx("flex items-center", "border-t-0")}>
                  <img
                    src={placeMenuCategory.pinUrl}
                    alt="gps pin icon"
                    className="h-12 w-auto"
                  />
                  <span
                    className={clsx(
                      "text-sm font-semibold text-azulGris900",
                      "ml-4 mb-2"
                    )}
                  >
                    {placeMenuCategory.title}
                  </span>
                </div>
                <ul className="pl-4">
                  {locations.map((location) => {
                    if (placeMenuCategory.typePlace.includes(location.type)) {
                      return (
                        <li key={location._id}>
                          <span className="text-xs font-medium uppercase">
                            {location.name}
                          </span>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </section>
      <section className={clsx("h-5", "bg-secondary", "rounded-xl")}></section>
    </main>
  );
}

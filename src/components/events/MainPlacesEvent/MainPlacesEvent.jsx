import clsx from "clsx";
import { placesOfInterestMenu } from "@/mocks/catalogs";
import { GoogleMap } from "@/components/maps";
import { BtnToLink } from "@/components/common";

export function MainPlacesEvent({ event, mapId }) {
  const { coordsEvent, locations } = event;
  const ubicationMap = { lat: coordsEvent[0], lng: coordsEvent[1] };

  return (
    <main className={clsx(
      "mt-4 w-full",
      )}>
      <div className={clsx(
        "h-full flex flex-col lg:flex-row"
        )}>
        <div
          className={clsx(
            "w-[fit] h-[fit] p-2",
            )}
        >
          <div className={clsx(
            "md:flex md:flex-col"
            )}>
            <h3
              className={clsx(
                "font-heading text-h3 text-azulGris900",
                "text-center my-4"
              )}
            >
              Tus lugares elegidos
            </h3>
            {placesOfInterestMenu
              .filter((placeMenuCategory) =>
                locations.some((location) =>
                  placeMenuCategory.typePlace.includes(location.type)
                )
              )
              .map((placeMenuCategory) => (
                <div key={placeMenuCategory.key} className={clsx("mb-3")}>
                  <div className={clsx("flex items-center", "border-t-0")}>
                    <img
                      src={placeMenuCategory.pinUrl}
                      alt="gps pin icon"
                      className="h-12 w-auto"
                    />
                    <span
                      className={clsx(
                        "font-body text-regularSemiBold text-azulGris900",
                        "ml-2 mb-2"
                      )}
                    >
                      {placeMenuCategory.title}
                    </span>
                  </div>
                  <ul className="pl-4 list-disc ml-6">
                    {locations.map((location) => {
                      if (placeMenuCategory.typePlace.includes(location.type)) {
                        return (
                          <li key={location._id}>
                            <a className="text-xs font-body">{location.name}</a>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              ))}
          </div>
        </div>
        <section className={clsx(
          "h-[530px] w-full",
          "md:h-[550px]",
          "lg:h-[500px] lg:mb-4"
          )}>
          <GoogleMap
            ubicationMap={ubicationMap}
            mapId={mapId}
            locations={locations}
          ></GoogleMap>
        </section>
      </div>
      <section className={clsx("mb-10", "flex flex-col items-end")}>
        <div className="flex gap-8">
          <BtnToLink
            url={`/pdp/plans/${event._id}`}
            name="Cambiar lugares"
            type="secondary"
          />
        </div>
      </section>
    </main>
  );
}

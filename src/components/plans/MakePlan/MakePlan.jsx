"use client";
import { useState } from "react";
import clsx from "clsx";
import { placesOfInterestMenu } from "@/mocks/catalogs";
import { GoogleMapPlaces } from "@/components/maps";

export function MakePlan({ data, mapId }) {
  const ubicationMap = { lat: data?.coordsEvent[0], lng: data?.coordsEvent[1] };
  const [placeRequest, setPlaceRequest] = useState(["lodging"]);

  return (
    <div className={clsx("h-[600px]", "flex justify-between gap-4", "mt-4")}>
      <div className={clsx("w-3/4")}>
        <GoogleMapPlaces
          mapId={mapId}
          ubicationMap={ubicationMap}
          placeRequest={placeRequest}
        />
      </div>
      <aside
        className={clsx(
          "bg-primary/10",
          "w-1/4",
          "rounded-xl",
          "p-4",
          "relative"
        )}
      >
        <h3 className={clsx("font-semibold text-lg text-primary")}>
          {data?.title}
        </h3>
        <span className={clsx("font-medium text-sm text-accent2")}>
          {data?.locationEvent}
        </span>
        <div className={clsx("flex flex-col flex-wrap")}>
          <span className={clsx("text-sm", "text-center", "my-4")}>
            Listado de lugares
          </span>

          <div className={clsx("flex flex-col")}>
            {placesOfInterestMenu.map((itemPlace) => (
              <div
                key={itemPlace.key}
                className={clsx("flex items-center", "hover:cursor-pointer")}
                onClick={() => setPlaceRequest(itemPlace.typePlace)}
              >
                <img
                  src={itemPlace.pinUrl}
                  alt="gps pin icon"
                  className="h-12 w-auto"
                />
                <span
                  className={clsx(
                    "text-sm text-azulGris900",
                    "ml-4 mb-2",
                    placeRequest === itemPlace.typePlace &&
                      "text-primary font-semibold"
                  )}
                >
                  {itemPlace.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

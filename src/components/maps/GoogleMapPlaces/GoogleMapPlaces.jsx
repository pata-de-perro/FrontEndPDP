"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import clsx from "clsx";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_GOOGLE;

export function GoogleMapPlaces({ optionsMap, requestPlaces }) {
  const mapGooglePlacesRef = useRef(null);

  useEffect(() => {
    const initializeMapPlaces = async () => {
      const loader = new Loader({
        apiKey: API_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { PlacesService } = await loader.importLibrary("places");
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        "marker"
      );

      const map = new Map(mapGooglePlacesRef.current, optionsMap);
      const placesService = new PlacesService(map);

      placesService.nearbySearch(requestPlaces, (results, status) => {
        if (status !== "OK" || !results) return;

        results.forEach((place) => {
          new AdvancedMarkerElement({
            map: map,
            position: place.geometry.location,
            title: place.name,
          });
        });
      });
    };
    initializeMapPlaces();
  }, [optionsMap, requestPlaces]);

  return (
    <div className={clsx("h-full")}>
      <div ref={mapGooglePlacesRef} className={clsx("h-full", "rounded-xl")} />
    </div>
  );
}

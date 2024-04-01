"use client";
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import clsx from "clsx";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_GOOGLE;

export function GoogleMapPlaces({ optionsMap, requestPlaces }) {
  const mapGooglePlacesRef = useRef(null);

  const [] = useState(null);

  useEffect(() => {
    const initializeMapPlaces = async () => {
      const loader = new Loader({
        apiKey: API_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { PlacesService } = await google.maps.importLibrary("places");
      const { AdvancedMarkerElement, PinElement } =
        await google.maps.importLibrary("marker");

      const map = new Map(mapGooglePlacesRef.current, optionsMap);

      const placesService = new PlacesService(map);
      placesService.nearbySearch(requestPlaces, (results, status) => {
        if (status !== "OK" || !results) return;

        results.forEach((place) => {
          if (place.business_status !== "OPERATIONAL") return;

          const pinPdPBackground = new PinElement({
            background: "#7ECDCE",
            borderColor: "#fff",
            glyphColor: "#87549F",
          });

          const marker = new AdvancedMarkerElement({
            map: map,
            position: place.geometry.location,
            title: place.name,
            content: pinPdPBackground.element.cloneNode(true),
          });

          marker.addListener("click", () => {
            console.log(place);
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

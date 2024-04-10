"use client";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { pinColors } from "@/mocks/catalogs";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY_GOOGLE;

export function GoogleMap({ chidren, ubicationMap, mapId, locations }) {
  const mapGoogleRef = useRef(null);
  const optionsMap = {
    center: ubicationMap,
    zoom: 13,
    mapId,
  };

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: API_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement, PinElement } =
        await google.maps.importLibrary("marker");
      const map = new Map(mapGoogleRef.current, optionsMap);

      locations.forEach((place) => {
        const pinPdPBackground = new PinElement({
          ...(pinColors[place.type] || pinColors.default),
        });
        const ubication = {
          lat: place.coords[0],
          lng: place.coords[1],
        };

        const marker = new AdvancedMarkerElement({
          map: map,
          position: ubication,
          title: place.name,
          content: pinPdPBackground.element.cloneNode(true),
        });

        marker.addListener("click", () => {
          const infoWindow = new google.maps.InfoWindow({
            content: `<div><h3>${place.name}</h3><p>${place.vicinity}</p></div>`,
          });
          infoWindow.open(map, marker);
        });
      });
    };

    initializeMap();
  }, [optionsMap]);

  return (
    <div className={clsx("h-full")}>
      <div ref={mapGoogleRef} className={clsx("h-full", "rounded-xl")}>
        {chidren}
      </div>
    </div>
  );
}

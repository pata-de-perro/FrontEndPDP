"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import clsx from "clsx";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY_GOOGLE;

export function GoogleMapPlaces({
  mapId,
  ubicationMap,
  placeRequest,
  handleClickMarker,
}) {
  const mapGooglePlacesRef = useRef(null);
  const optionsMap = {
    center: ubicationMap,
    zoom: 13,
    mapId,
  };

  useEffect(() => {
    const requestPlaces = {
      location: ubicationMap,
      radius: "8000",
      type: placeRequest,
    };

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

          const pinColors = {
            lodging: {
              background: "#C92CE5",
              borderColor: "#fff",
              glyphColor: "#fff",
            },
            tourist_attraction: {
              background: "#253A74",
              borderColor: "#fff",
              glyphColor: "#fff",
            },
            restaurant: {
              background: "#FE9401",
              borderColor: "#fff",
              glyphColor: "#87549F",
            },
            default: {
              background: "#7ECDCE",
              borderColor: "#fff",
              glyphColor: "#87549F",
            },
          };

          const pinPdPBackground = new PinElement({
            ...(pinColors[placeRequest] || pinColors.default),
          });

          const marker = new AdvancedMarkerElement({
            map: map,
            position: place.geometry.location,
            title: place.name,
            content: pinPdPBackground.element.cloneNode(true),
          });

          marker.addListener("click", () => {
            handleClickMarker(place);
          });
        });
      });
    };
    initializeMapPlaces();
  }, [placeRequest]);

  return (
    <div className={clsx("h-full")}>
      <div ref={mapGooglePlacesRef} className={clsx("h-full", "rounded-xl")} />
    </div>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import clsx from "clsx";
import { pinColors } from "@/mocks/catalogs";
import { buildDetailsOfPlace } from "@/helpers";
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
      radius: "20000",
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

          placesService.getDetails(
            { placeId: place.place_id },
            (placeDetail, status) => {
              if (status === "OK" && placeDetail) {
                const pinPdPBackground = new PinElement({
                  ...(pinColors[placeRequest] || pinColors.default),
                });

                const marker = new AdvancedMarkerElement({
                  map: map,
                  position: placeDetail.geometry.location,
                  title: placeDetail.name,
                  content: pinPdPBackground.element.cloneNode(true),
                });

                marker.addListener("click", () => {
                  const placeFormated = buildDetailsOfPlace(placeDetail);
                  handleClickMarker(placeFormated);
                });
              }
            }
          );
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

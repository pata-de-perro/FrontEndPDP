"use client";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import { Loader } from "@googlemaps/js-api-loader";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_GOOGLE;

export function GoogleMap() {
  const mapContainerRef = useRef(null);
  let map = null;

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: API_KEY,
        version: "weekly",
      });

      loader
        .importLibrary("maps")
        .then(() => {
          const google = window.google;
          map = new google.maps.Map(mapContainerRef.current, {
            center: { lat: 23.6345, lng: -102.5528 },
            zoom: 7,
          });
        })
        .catch((error) => {
          console.error("Error loading Google Maps API:", error);
        });
    };

    initializeMap();
  }, []);

  return (
    <div className={clsx("h-full")}>
      <div ref={mapContainerRef} className={clsx("h-full", "rounded-xl")} />
    </div>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import clsx from "clsx";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY_GOOGLE;

export function GoogleMap({ optionsMap, chidren }) {
  const mapGoogleRef = useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: API_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      new Map(mapGoogleRef.current, optionsMap);
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

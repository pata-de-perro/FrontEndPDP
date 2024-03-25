"use client";
import clsx from "clsx";
import { AsideSearchList, GoogleMap } from "@/components/maps";

export function TravelMapContainer() {
  return (
    <div className={clsx("h-[630px]", "mt-4", "flex")}>
      <GoogleMap />
      <AsideSearchList />
    </div>
  );
}

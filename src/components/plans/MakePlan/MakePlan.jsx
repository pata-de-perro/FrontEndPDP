import { GoogleMap } from "@/components/maps";
import clsx from "clsx";

export function MakePlan({ plan }) {
  console.log(plan);
  return (
    <div
      className={clsx("h-[600px]", "flex justify-between gap-4", "mt-4 mr-6")}
    >
      <div className={clsx("w-3/4")}>
        <GoogleMap></GoogleMap>
      </div>
      <aside className={clsx("bg-neutral-100", "w-1/4", "rounded-xl", "p-2")}>
        points
      </aside>
    </div>
  );
}

import clsx from "clsx";
import { CardEvent } from "@/components/common";

export function ListPlans({ data }) {
  return (
    <div className={clsx("mt-4", "flex flex-wrap", "justify-evenly")}>
      {data?.map((event) => (
        <CardEvent key={event._id} info={event} />
      ))}
    </div>
  );
}

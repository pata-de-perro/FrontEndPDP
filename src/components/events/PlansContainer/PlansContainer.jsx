import clsx from "clsx";
import { CardEvent } from "../CardEvent/CardEvent";

export function PlansContainer({ data }) {
  return (
    <div className={clsx("mt-4", "flex flex-wrap", "justify-evenly")}>
      {data?.map((event) => (
        <CardEvent key={event._id} info={event} />
      ))}
    </div>
  );
}

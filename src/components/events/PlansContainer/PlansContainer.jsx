import clsx from "clsx";
import { CardEvent } from "../CardEvent/CardEvent";

export function PlansContainer({ data }) {
  return (
    <div className={clsx("mt-4")}>
      {data?.map((event) => (
        <CardEvent key={event._id} info={event} />
      ))}
    </div>
  );
}

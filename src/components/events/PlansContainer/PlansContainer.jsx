import clsx from "clsx";
import { CardEvent } from "../CardEvent/CardEvent";

export function PlansContainer({ data }) {
  console.log(data);
  return (
    <div className={clsx("border-t-0")}>
      {data?.map((event) => (
        <CardEvent key={event._id} info={event} />
      ))}
    </div>
  );
}

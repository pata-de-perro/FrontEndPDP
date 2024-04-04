import clsx from "clsx";
import { eventDateFormat, getHourOfDate } from "@/helpers";
import { AiTwotoneCalendar } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";

export function ShowInfoEventHero({ event }) {
  return (
    <div className="infoContainer w-[350px]">
      <div className={clsx("flex flex-col", "mt-3")}>
        <h4
          className={clsx(
            "font-heading text-h4",
            event?.isTravel
              ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
              : "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
          )}
        >
          {event?.title}
        </h4>
        <p
          className={clsx(
            "mb-4",
            "text-lg font-medium",
            event?.isTravel ? "text-blue-700" : "text-violet-700"
          )}
        >
          {event?.description}
        </p>
      </div>

      <section className={clsx("mt-2", "text-accent2 font-medium")}>
        <div className="flex items-center">
          <AiTwotoneCalendar />
          <p className="font-body text-inviteSmallText  ml-2">
            {eventDateFormat(event?.initialDate)} -{" "}
            {event?.isTravel
              ? eventDateFormat(event?.endDate)
              : getHourOfDate(event?.initialDate)}
          </p>
        </div>
        <div className="flex items-center">
          <LuMapPin />
          <p className="font-body text-inviteSmallText  ml-2">
            {event?.locationEvent}
          </p>
        </div>
      </section>
      {event?.friends && (
        <div className="flex items-end">
          <GrGroup />
          <p className="font-body text-inviteSmallText text-azulGris600">0</p>
          <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
            Personas
          </p>
        </div>
      )}
    </div>
  );
}

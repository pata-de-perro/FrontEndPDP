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
            "text-azulGris900"
          )}
        >
          {event?.title}
        </h4>
        <p
          className={clsx(
            "mb-4",
            "text-lg font-body",
            "text-azulGris900"
          )}
        >
          {event?.description}
        </p>
      </div>

      <section className={clsx("mt-2", "text-azulGris900 font-body text-regular")}>
        <div className="flex items-center">
          <AiTwotoneCalendar />
          <p className="font-body text-inviteSmallText ml-2">
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

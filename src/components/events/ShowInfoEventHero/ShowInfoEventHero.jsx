import clsx from "clsx";
import Image from "next/image";
import { eventDateFormat, getHourOfDate } from "@/helpers";

export function ShowInfoEventHero({ event }) {
  return (
    <div className="infoContainer w-[350px]">
      <div className={clsx("flex flex-col", "mt-3")}>
        <h4
          className={clsx(
            "font-heading text-h4",
            event?.isTravel ? "text-primary" : "text-accent2"
          )}
        >
          {event?.title}
        </h4>
        <p className="mb-4 text-lg font-medium">{event?.description}</p>
      </div>

      <section className={clsx("mt-2", "text-accent2 font-medium")}>
        <div className="flex items-center">
          <Image
            src="/calendar_today.svg"
            width={21}
            height={21}
            alt="icon calendar today"
          />
          <p className="font-body text-inviteSmallText  ml-2">
            {eventDateFormat(event?.initialDate)} -{" "}
            {event?.isTravel
              ? eventDateFormat(event?.endDate)
              : getHourOfDate(event?.initialDate)}
          </p>
        </div>
        <div className="flex items-center">
          <Image src="/pin_drop.svg" width={21} height={21} alt="invite icon" />
          <p className="font-body text-inviteSmallText  ml-2">
            {event?.locationEvent}
          </p>
        </div>
      </section>
      {event?.friends && (
        <div className="flex items-end">
          <Image
            src="/people-icon.svg"
            width={21}
            height={21}
            alt="invite icon"
            className="mr-2"
          />
          <p className="font-body text-inviteSmallText text-azulGris600">0</p>
          <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
            Personas
          </p>
        </div>
      )}
    </div>
  );
}

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { eventDateFormat, getHourOfDate } from "@/helpers";
import { AiTwotoneCalendar } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";

export function CardEvent({ info }) {
  const calendarIcon = <AiTwotoneCalendar />
  const pinIcon = <LuMapPin />
  const friendsIcon = <GrGroup />

  const router = useRouter();

  return (
    <div
      className={clsx(
        "bg-white shadow-xl rounded-2xl",
        "w-[400px]",
        "flex-none ",
        "m-2",
        "grid justify-items-center items-start"
      )}
    >
      <div
        className={clsx(
          "rounded-t-2xl",
          "w-[400px] h-[150px]",
          info.isTravel ? "bg-[url('/travel-header.png')]" : "bg-[url('/event-header.png')]",
          "mb-2"
        )}
      ></div>
      <div className="infoContainer w-[350px]">
        <div className="flex justify-between content-end">
          <p className="font-heading text-accent2 text-h4">{info.title}</p>
          <Image
            src={info.isTravel ? "/airport_shuttle.svg" : "/restaurant.svg"}
            width={35}
            height={35}
            alt="trip icon"
            className=""
          />
        </div>
        <div className="flex items-center">
        {calendarIcon}
          <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
            {eventDateFormat(info.initialDate)} -{" "}
            {info.isTravel
              ? eventDateFormat(info.endDate)
              : getHourOfDate(info.initialDate)}
          </p>
        </div>
        <div className="flex items-center">
          {pinIcon}
          <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
            {info.locationEvent}
          </p>
        </div>
        {info?.friends && (
          <div className="flex items-end">
            {friendsIcon}
            <p className="font-body text-inviteSmallText text-azulGris600">0</p>
            <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
              Personas
            </p>
          </div>
        )}
        <div className="py-6">
          <button
            className={clsx(
              "btn btn-block",
              "my-2",
              info.isTravel ? "bg-primary text-white" : "bg-secondary text-accent2",
              "hover:bg-accent1 hover:text-accent2"
            )}
            onClick={() => router.push(`/pdp/events/${info._id}`)}
          >
            {info.isTravel ? "Ver viaje" : "Ver evento"}
          </button>
        </div>
      </div>
    </div>
  );
}

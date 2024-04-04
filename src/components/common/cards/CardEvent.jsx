"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { eventDateFormat, getHourOfDate } from "@/helpers";

export function CardEvent({ info }) {
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
          info.isTravel ? "bg-primary" : "bg-secondary",
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
          <Image
            src="/calendar_today.svg"
            width={21}
            height={21}
            alt="icon calendar today"
          />
          <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
            {eventDateFormat(info.initialDate)} -{" "}
            {info.isTravel
              ? eventDateFormat(info.endDate)
              : getHourOfDate(info.initialDate)}
          </p>
        </div>
        <div className="flex items-center">
          <Image src="/pin_drop.svg" width={21} height={21} alt="invite icon" />
          <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
            {info.locationEvent}
          </p>
        </div>
        {info?.friends && (
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
        <div className="py-6">
          <button
            className={clsx(
              "btn btn-block",
              "my-2",
              "text-white",
              info.isTravel ? "bg-primary" : "bg-secondary",
              "hover:bg-accent1 hover:text-accent2"
            )}
            onClick={() => router.push(`/pdp/events/${info._id}`)}
          >
            Ver viaje
          </button>
        </div>
      </div>
    </div>
  );
}

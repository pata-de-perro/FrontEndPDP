"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { eventDateFormat } from "@/helpers";

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
          "bg-primary",
          "mb-2"
        )}
      ></div>
      <div className="infoContainer w-[350px]">
        <div className="flex justify-between content-end">
          <p className="font-heading text-accent2 text-h4">{info.title}</p>
          <Image
            src="/airport_shuttle.svg"
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
            {eventDateFormat(info.endDate)}
          </p>
        </div>
        <div className="flex items-center">
          <Image src="/pin_drop.svg" width={21} height={21} alt="invite icon" />
          <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
            {info.locationEvent}
          </p>
        </div>
        <div className="py-6">
          <button
            className={clsx(
              "btn btn-block",
              "my-2",
              "bg-primary text-white",
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

import { PlacesList } from "@/app/components/PlacesList";
import { GoogleMap } from "@/app/components/maps";

import clsx from "clsx";

export default function EventPage() {
  return (
    <div>
      <section className="mt-4">
        <div className="infoContainer ">
          <div className="flex">
            <p className="font-heading text-accent2 text-h4">
              Nombre de tu evento
            </p>
            <img
              src="/airport_shuttle.svg"
              width={35}
              height={35}
              alt="trip icon"
              className=""
            />
          </div>
          <div className="flex items-center">
            <img
              src="/calendar_today.svg"
              width={21}
              height={21}
              alt="icon calendar today"
            />
            <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
              15 Mayo - 17 Mayo
            </p>
          </div>
        </div>
      </section>
        <section className="mt-2">
        <div className="bg-primary rounded-t-2xl h-[150px] mr-2 "/>
            <div className="grid grid-cols-3 grid-gap-1">
                <div className="col-span-1">
                    <h3 className="fond-heading text-h3 ml-4">Lugares de interés</h3>
                    <PlacesList />
                </div>
                <div className="map-container col-span-2 mr-4">
                    <GoogleMap />
                </div>
            </div>
        </section>
    </div>
  );
}

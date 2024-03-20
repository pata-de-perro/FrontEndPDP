"use client";

import clsx from "clsx";
import { PlacesList } from "@/app/components/PlacesList";
import { PlacesListDD } from "@/app/components/PlacesListDD";
import { GoogleMap } from "@/app/components/maps";
import {
  BtnPrimary,
  ModalContent,
  TitleSection,
} from "@/app/components/common";
import { CreateInvite } from "@/app/components/sendInvite/CreateInvite";

export default function EventPage() {
  const handleOpenModal = () => {
    document.getElementById("modal_send_invite").showModal();
  };
  return (
    <>
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
                className="ml-2"
              />
            </div>
            <div className="flex items-center">
              <img
                src="/calendar_today.svg"
                width={21}
                height={21}
                alt="icon calendar today"
              />
              <p className={clsx(
                "font-body text-inviteSmallText text-azulGris600",
                "ml-2",
              )}>
                15 Mayo - 17 Mayo
              </p>
            </div>
            <div className="flex items-center">
            <img
              src="/pin_drop.svg"
              width={21}
              height={21}
              alt="invite icon"
            />
            <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
              Ubicación
            </p>
          </div>
          </div>
        </section>
        <section className="my-4 px-2">
          <div className="bg-primary rounded-t-2xl h-[150px] mr-2 " />
          <div className="grid grid-cols-3 grid-gap-1">
            <div className="col-span-1">
              <h3 className="fond-heading text-h3 ml-2">Lugares de interés</h3>
              <PlacesList />
            </div>
            <div className="map-container col-span-2 mr-4">
              <GoogleMap />
            </div>
          </div>
        </section>
        <section>
          <h3 className="font-heading text-h3 text-azulGris900 ml-2 pt-4">Compañeros de viaje</h3>
          <BtnPrimary
            title="Agrega compañeros de viaje"
            onClick={handleOpenModal}
          />
        </section>
      </div>

      <ModalContent
        idModal="modal_send_invite"
        title="Agrega a compañeros de viaje"
      >
        <CreateInvite />
      </ModalContent>
    </>
  );
}

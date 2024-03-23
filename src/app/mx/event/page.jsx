"use client";

import clsx from "clsx";
import { PlacesListDD } from "@/app/components/PlacesListDD";
import { GoogleMap } from "@/app/components/maps";
import { ModalContent } from "@/app/components/common";
import { CreateInvite } from "@/app/components/sendInvite/CreateInvite";

export default function EventPage() {
  const handleOpenModal = () => {
    document.getElementById("modal_send_invite").showModal();
  };
  return (
    <>
      <div>
        <section className="mt-4"></section>
        <section className="my-4 px-2">
          <div className="bg-primary rounded-t-2xl h-[150px] mr-2 " />
          <div
            className={clsx(
              "grid",
              "md:grid-cols-1",
              "lg:grid-cols-3 lg:grid-gap-1"
            )}
          >
            <div className="col-span-1 grid-gap-2">
              <div className="infoContainer ">
                <div className="flex items-center">
                  <img
                    src="/airport_shuttle.svg"
                    width={35}
                    height={35}
                    alt="trip icon"
                    className="mx-2"
                  />
                  <p className="font-heading text-accent2 text-h3">
                    Nombre de tu evento
                  </p>
                </div>
                <div className="ml-2">
                  <div className="flex items-center">
                    <img
                      src="/calendar_today.svg"
                      width={21}
                      height={21}
                      alt="icon calendar today"
                    />
                    <p
                      className={clsx(
                        "font-body text-inviteSmallText text-azulGris600",
                        "ml-2"
                      )}
                    >
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
              </div>
              <div id="placesListContainer">
                <h3 className="fond-heading text-h3 ml-2">
                  Lugares de interés
                </h3>
                <div className="not-sr-only lg:sr-only">
                  <PlacesListDD />
                </div>
                <div className="sr-only lg:not-sr-only">
                  <PlacesListDD />
                </div>
              </div>
            </div>
            <div className="map-container col-span-2 mr-4 sm:h-[250px] md:h-[250px] lg:h-auto">
              <GoogleMap />
            </div>
          </div>
        </section>
        <section id="friendsContainer">
          <h3 className="font-heading text-h3 text-azulGris900 ml-2 pt-4">
            Compañeros de viaje
          </h3>
          <p className="ml-2">Lista de amigos</p>
          <button
            className={clsx(
              "w-auto h-[45px]",
              "px-6 my-4",
              "rounded-2xl",
              "bg-secondary",
              "text-accent2 font-body text-regularSemiBold",
              "hover:bg-secondaryOpacity"
            )}
            onClick={handleOpenModal}
          >
            Agrega compañeros de viaje
          </button>
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

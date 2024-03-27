"use client";
import clsx from "clsx";
import { ModalContent } from "@/components/common";
import { GoogleMap } from "@/components/maps";
import { CreateInvite } from "@/components/companions";

export default function EventPage({ params }) {
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
              <div className={clsx("infoContainer", "pt-2")}>
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
            </div>
            <div className="map-container col-span-2 mr-4 sm:h-[250px] md:h-[250px] lg:h-auto">
              <GoogleMap />
            </div>
          </div>
        </section>
        <section id="friendsContainer" className={clsx("flex justify-between")}>
          <div></div>
          <div className="flex flex-wrap justify-end">
            <button
              className={clsx(
                "bg-azulGris200",
                "text-regular font-body",
                "h-[24px] w-auto",
                "p-4 mr-6",
                "rounded-lg",
                "flex items-center",
                "disabled: cursor-not-allowed"
              )}
              disabled
            >
              Editar viaje
            </button>
            <button
              className={clsx(
                "bg-primary",
                "text-regular font-body text-white",
                "h-[24px] w-auto",
                "p-4 mr-6",
                "rounded-lg",
                "flex items-center",
                "disabled: cursor-not-allowed"
              )}
              disabled
            >
              Guardar viaje
            </button>
          </div>
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

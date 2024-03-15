"use client";
import clsx from "clsx";
import {
  BtnPrimary,
  HeroAdmin,
  ModalContent,
  TitleSection,
} from "@/app/components/common";
import { CreateEvent } from "../../components/events/CreateEvent";
import { NotEvent } from "../../components/events/NotEvent";

export default function HomePage() {
  const handleOpenModal = () => {
    document.getElementById("modal_create_event").showModal();
  };

  return (
    <>
      <main>
        <HeroAdmin title="¡Facilitando tus planes!" urlImg="/Reminders-bro.svg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <BtnPrimary
            title="Planea tu primer viaje"
            onClick={handleOpenModal}
          />
        </HeroAdmin>
        <TitleSection title="Revisa tus planes" urlIcon="/Icono-Fecha.svg" />
        <NotEvent />

        {/* Invitaciones tus planes */}
        <TitleSection
          title="Revisa tus invitaciones"
          urlIcon="/Icono-Fecha.svg"
        />

        {/* Invite Card */}
        <div className="container">
          <div
            className={clsx(
              "bg-white shadow-xl rounded-2xl",
              "w-[304px] h-[356px]",
              "grid justify-items-center",
              "mt-6",
              "md:w-[540px] md:h-[190px]",
              "md:border",
              "md:flex md:flex-row-reverse"
            )}
          >
            <div>
              <img
                src="/InviteImage.png"
                width={304}
                height={160}
                className={clsx(
                  "rounded-t-2xl",
                  "md:rounded-r-2xl md:rounded-tl-none",
                  "md:h-[190px] md:w-[260px]"
                )}
              />
            </div>
            <div className={clsx("md:grid md:justify-items-start", "md:mr-10")}>
              <p className="font-heading text-accent2 text-h4 mt-2">
                Nombre de tu viaje
              </p>
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
              <div className="flex items-end">
                <img
                  src="/people-icon.svg"
                  width={21}
                  height={21}
                  alt="invite icon"
                  className="mr-2"
                />
                <p className="font-body text-inviteSmallText text-azulGris600">
                  0
                </p>
                <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
                  Personas
                </p>
              </div>
              <button
                className={clsx(
                  "bg-secondary",
                  "w-[216px] h-[45px] rounded-xl",
                  "mt-4",
                  "flex justify-center items-center",
                  "md:mb-2"
                )}
              >
                <p className="font-body text-regular text-accent2">
                  Aceptar invitación
                </p>
                <img
                  src="/Invite.svg"
                  width={21}
                  height={21}
                  alt="invite icon"
                  className="mx-2"
                />
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* TODO: Utilizar estado para el modal */}
      <ModalContent
        idModal="modal_create_event"
        title="Háblanos un poco de tu evento"
      >
        <CreateEvent />
      </ModalContent>
    </>
  );
}

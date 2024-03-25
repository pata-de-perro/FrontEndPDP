"use client";
import { HeroAuth } from "@/components/layouts";
import { BtnPrimary, ModalContent } from "@/components/common";
import { CreateEvent, ReviewPlans } from "@/components/events";

export default function HomePage() {
  const handleOpenModal = () => {
    document.getElementById("modal_create_event").showModal();
  };

  return (
    <>
      <main>
        <HeroAuth title="¡Facilitando tus planes!" urlImg="/Reminders-bro.svg">
          <p>
            Queremos que el planear tu viaje o salida sea lo más fácil posible.
            En Pata de Perro puedes guardar diferentes ubicaciones segun su
            categoría.
          </p>
          <BtnPrimary
            title="Planea tu primer viaje"
            onClick={handleOpenModal}
          />
        </HeroAuth>
        <ReviewPlans />
      </main>
      <ModalContent
        idModal="modal_create_event"
        title="Háblanos un poco de tu evento"
      >
        <CreateEvent />
      </ModalContent>
    </>
  );
}

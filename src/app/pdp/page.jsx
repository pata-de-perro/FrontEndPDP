"use client";
import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { HeroAuth } from "@/components/layouts";
import { BtnPrimary, ModalContent } from "@/components/common";
import { CreateEvent, ReviewPlans } from "@/components/events";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_GOOGLE;

export default function HomePage() {
  const handleOpenModal = () => {
    document.getElementById("modal_create_event").showModal();
  };

  useEffect(() => {
    const initializeAutocomplete = () => {
      const loader = new Loader({
        apiKey: API_KEY,
        version: "weekly",
      });

      loader.importLibrary("places").then(async () => {
        const { Autocomplete } = await google.maps.importLibrary("places");
        const input = document.getElementById("place");

        const autocomplete = new Autocomplete(input, {
          fields: ["address_components", "geometry", "name"],
          types: ["address"],
        });

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          console.log(place);
        });
      });
    };

    initializeAutocomplete();
  }, []);

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
        <input type="text" placeholder="place" id="place" />
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

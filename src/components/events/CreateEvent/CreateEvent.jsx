"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { Loader } from "@googlemaps/js-api-loader";
import { posCreateNewEventApi } from "@/services";
import { FormEvent } from "@/components/events";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_GOOGLE;

export function CreateEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({ defaultValues: { isTravel: true } });
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const initializeAutocomplete = () => {
      const loader = new Loader({
        apiKey: API_KEY,
        version: "weekly",
      });

      loader.importLibrary("places").then(async () => {
        const { Autocomplete } = await google.maps.importLibrary("places");
        const inputLocation = document.getElementById("locationEvent");

        const autocomplete = new Autocomplete(inputLocation, {
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

  const onSubmitEvent = handleSubmit(async (data) => {
    const infoEvent = {
      ...data,
      userId: session.user.id,
    };
    const result = await posCreateNewEventApi(
      infoEvent,
      session.user.accessToken
    );
    if (result.success === true) {
      reset();
      router.push(`/pdp/plans/${result.event}`);
    }
  });

  return (
    <div>
      <h3 className={clsx("mb-6", "text-center text-sm")}>
        Esto facilitará encontrar información de tu viaje
      </h3>
      <input type="text" placeholder="Address" id="location" />
      <FormEvent
        register={register}
        onSubmitEvent={onSubmitEvent}
        errors={errors}
        watch={watch}
        setValue={setValue}
      />
    </div>
  );
}

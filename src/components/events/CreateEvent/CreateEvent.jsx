"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { posCreateNewEventApi } from "@/services";
import { FormEvent } from "@/components/events";

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

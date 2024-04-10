"use client";
import clsx from "clsx";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { formatDatesEvent } from "@/helpers";
import { FormEditEvent } from "@/components/events";
import { updateEventByIdApi } from "@/services";

export function EditEvent({ user, event, handleCloseEditModal }) {
  const { accessToken } = user;
  const { _id, isTravel, title, description, initialDate, endDate } = event;

  const { formattedStartDate, formattedEndDate } = formatDatesEvent(
    isTravel,
    initialDate,
    endDate
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      isTravel,
      title,
      description,
      initialDate: formattedStartDate,
      endDate: formattedEndDate,
    },
  });
  const router = useRouter();

  const onSubmitEditEvent = handleSubmit(async (data) => {
    const result = await updateEventByIdApi(_id, accessToken, data);

    if (result?.success === true) {
      Swal.fire({
        position: "top-end",
        title: result?.msg,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          title: "text-xl text-accent2 font-heading",
          popup: "bg-accent1",
        },
      });
      handleCloseEditModal();
      router.refresh();
    } else {
      Swal.fire({
        position: "top-end",
        title: result?.msg,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          title: "text-xl text-accent2 font-heading",
          popup: "bg-red-200",
        },
      });
    }
  });

  return (
    <div className={clsx("mt-4 p-2")}>
      <FormEditEvent
        onSubmitEditEvent={onSubmitEditEvent}
        isTravel={isTravel}
        register={register}
        errors={errors}
        watch={watch}
      />
    </div>
  );
}

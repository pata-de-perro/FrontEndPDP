import { useForm } from "react-hook-form";
import { FormEditEvent } from "@/components/events";
import clsx from "clsx";

export function EditEvent({ user, event }) {
  const { accessToken } = user;
  const { _id, isTravel, title, description, initialDate, endDate } = event;

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
      initialDate,
      endDate,
    },
  });

  const onSubmitEditEvent = handleSubmit((data) => {
    console.log(data);
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

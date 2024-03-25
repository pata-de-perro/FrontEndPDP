import clsx from "clsx";
import { useForm } from "react-hook-form";
import { FormEvent } from "@/components/events";

export function CreateEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({ defaultValues: { isTravel: true } });

  const onSubmitEvent = handleSubmit((data) => {
    console.log(data);
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

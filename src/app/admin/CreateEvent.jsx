import { useForm } from "react-hook-form";
import clsx from "clsx";

export function CreateEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmitEvent = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <h3 className={clsx("mb-6", "text-center text-xs")}>
        Esto facilitará encontrar información de tu viaje
      </h3>
    </div>
  );
}

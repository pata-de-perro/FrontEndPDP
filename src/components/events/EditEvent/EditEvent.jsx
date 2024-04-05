import { useForm } from "react-hook-form";

export function EditEvent({ user, event }) {
  const { accessToken } = user;
  const { _id, isTravel, title, description, initialDate, endDate } = event;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
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
    <div>
      <h2>Editando...{_id}</h2>
      <span>{title}</span>
      <span>{description}</span>
    </div>
  );
}

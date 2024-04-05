export function EditEvent({ user, event }) {
  const { accessToken } = user;
  const { _id, isTravel, title, description, initialDate, endDate } = event;

  return (
    <div>
      <h2>Editando...{_id}</h2>
      <span>{title}</span>
      <span>{description}</span>
    </div>
  );
}

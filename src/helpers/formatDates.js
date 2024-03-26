export function addHoursToDateTime(dateTimeString, hoursToAdd) {
  const dateTime = new Date(dateTimeString);
  dateTime.setHours(dateTime.getHours() + hoursToAdd);

  if (dateTime.getHours() >= 24) {
    dateTime.setDate(dateTime.getDate() + 1);
    dateTime.setHours(dateTime.getHours() - 24);
  }

  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  const day = String(dateTime.getDate()).padStart(2, "0");
  const hours = String(dateTime.getHours()).padStart(2, "0");
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function eventDateFormat(dateString) {
  const date = new Date(dateString);

  if (!date || isNaN(date.getTime())) {
    return "";
  }
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

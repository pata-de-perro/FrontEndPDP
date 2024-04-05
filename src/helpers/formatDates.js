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

export function getHourOfDate(dateISO) {
  const date = new Date(dateISO);
  let hour = date.getHours();
  const minutes = date.getMinutes();

  let period = "am";

  if (hour >= 12) {
    period = "pm";
    hour -= 12;
  }
  if (hour === 0) {
    hour = 12;
  }

  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHour}:${formattedMinutes} ${period}`;
}

const parsedUTCToLocalDateTimeString = (utcDateTime) => {
  const date = new Date(utcDateTime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const parsedUTCDateToISODateString = (utcDate) => {
  return new Date(utcDate).toISOString().split("T")[0];
};

export const formatDatesEvent = (condition, startDate, endDate) => {
  let formattedStartDate = null;
  let formattedEndDate = null;

  if (condition) {
    formattedStartDate = parsedUTCDateToISODateString(startDate);
    formattedEndDate = parsedUTCDateToISODateString(endDate);
  } else {
    formattedStartDate = parsedUTCToLocalDateTimeString(startDate);
    formattedEndDate = parsedUTCToLocalDateTimeString(endDate);
  }

  return { formattedStartDate, formattedEndDate };
};

export const buildLocationByPlaces = (place) => {
  const location = place.address_components
    .filter((component) =>
      ["route", "locality", "administrative_area_level_1", "country"].includes(
        component.types[0]
      )
    )
    .map((component) => component.long_name)
    .join(", ");

  const lat = place.geometry.location.lat();
  const lng = place.geometry.location.lng();
  const coords = [lat, lng];

  return { location, coords };
};

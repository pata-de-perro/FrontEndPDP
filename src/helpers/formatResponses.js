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

export const buildDetailsOfPlace = (place) => {
  const dataPlace = {
    place_id: place.place_id,
    icon: place.icon,
    name: place.name,
    vicinity: place.vicinity,
    photos: place?.photos?.map((photo) => photo.getUrl()),
    rating: place.rating,
    user_ratings_total: place.user_ratings_total,
    coords: [place.geometry.location.lat(), place.geometry.location.lng()],
    contact: {
      address: place.formatted_address,
      phone: place.formatted_phone_number,
      web: place.website,
    },
    opening: {
      isOpen: place?.opening_hours?.isOpen(),
      periods: place?.periods,
      weekday: place?.weekday_text,
    },
  };

  return dataPlace;
};

const URL_API = process.env.NEXT_PUBLIC_URL_API;

export const postEventLocationsToApi = async (eventId, token, locations) => {
  try {
    const res = await fetch(`${URL_API}/locations/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(locations),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Error saving locations event: ${err.message}`);
  }
};

const URL_API = process.env.NEXT_PUBLIC_URL_API;

export const getUserEventsApi = async (userId, token) => {
  try {
    const res = await fetch(`${URL_API}/events/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Error fetching user events: ${err.message}`);
  }
};

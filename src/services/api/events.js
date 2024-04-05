const URL_API = process.env.NEXT_PUBLIC_URL_API;

export const getUserEventsApi = async (userId, token) => {
  try {
    const res = await fetch(`${URL_API}/events/user/${userId}`, {
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

export const posCreateNewEventApi = async (infoEvent, token) => {
  try {
    const res = await fetch(`${URL_API}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(infoEvent),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Error registering event: ${err.message}`);
  }
};

export const getPlanEventApi = async (planId, token) => {
  try {
    const res = await fetch(`${URL_API}/events/plan/${planId}`, {
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

export const getPlacesEventApi = async (eventId, token) => {
  try {
    const res = await fetch(`${URL_API}/events/place/${eventId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Error retrieving target event: ${err.message}`);
  }
};

export const deleteEventByIdApi = async (eventId, token) => {
  try {
    const res = await fetch(`${URL_API}/events/delete/${eventId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Error removing event: ${err.message}`);
  }
};

export const updateEventByIdApi = async (eventId, token, infoEvent) => {
  try {
    const res = await fetch(`${URL_API}/events/update/${eventId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(infoEvent),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Error updating event: ${err.message}`);
  }
};

export const getUpcomingEventsByUserApi = async (userId, token) => {
  try {
    const res = await fetch(`${URL_API}/events/upcoming/user/${userId}`, {
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

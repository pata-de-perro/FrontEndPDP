const URL_API = process.env.NEXT_PUBLIC_URL_API;

export const postLoginApi = async (credentials) => {
  try {
    const res = await fetch(`${URL_API}/auth/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Error authenticating user: ${err.message}`);
  }
};

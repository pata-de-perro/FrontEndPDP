const URL_API = process.env.NEXT_PUBLIC_URL_API;

export const postCreateNewUserApi = async (infoUser) => {
  try {
    const res = await fetch(`${URL_API}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(infoUser),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Error registering user: ${err.message}`);
  }
};

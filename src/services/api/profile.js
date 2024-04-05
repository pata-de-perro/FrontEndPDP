const URL_API = process.env.NEXT_PUBLIC_URL_API;

export const getProfileApi = async (userId, token) => {
    try{
        const res = await fetch(`${URL_API}/users/profile/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error(`Error fetching user profile: ${err.message}`)
    }
}

export const updateProfileApi = async (userId, token, newData) => {
    try{
        const res = await fetch(`${URL_API}/users/profile-update/${userId}`, {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return
    }catch (err) {
        throw new Error(`Error fetching user profile: ${err.message}`)
    }
}
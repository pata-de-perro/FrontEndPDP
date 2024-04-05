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

export const updateProfileApi = async (newData, token) => {
    try{
        const res = await fetch(`${URL_API}/users/profile-update/${newData.userId}`, {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newData)
        });
        return res
    }catch (err) {
        throw new Error(`Error fetching user profile: ${err.message}`)
    }
}

export const updateAvatarApi = async (newData, token) => {
    try{
        const res = await fetch(`${URL_API}/users/profile-update-avatar/${newData.userId}`, {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newData)
        });
        return res
    } catch (err) {
        throw new Error(`Error uploading user avatar: ${err.message}`)
    }
}
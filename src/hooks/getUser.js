import {apiClient} from "../lib/apiClient";

export const getUser = async (token) => {
    try {
        const resUser = await apiClient.get("/users", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(resUser)
        return {resUser: resUser, error: null}

    } catch (e) {
        console.log(e)
        return {res: null, error: e}
    }
}
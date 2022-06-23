import {apiClient} from "../lib/apiClient";


export const postUser = async (token, name) => {
    try {
        const res = await apiClient.put("/users", {name}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return {res, error: null}
    } catch (e) {
        return {res: null, error: e}
    }
}

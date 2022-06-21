import {apiClient} from "../lib/apiClient";


export const getBooks = async (token) => {
    try {
        const res = await apiClient.get("/books", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                offset: 1
            },
        });
        return {res, error: null}
    } catch (e) {
        return {res: null, error: e}
    }
}

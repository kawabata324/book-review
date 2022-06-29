import {apiClient} from "../lib/apiClient";


export const getBooks = async (token, page) => {
    const offset = page === 1 ? page : page * 10

    try {
        const res = await apiClient.get("/books", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                offset
            },
        });
        return {res, error: null}
    } catch (e) {
        return {res: null, error: e}
    }
}

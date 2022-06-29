import {apiClient} from "../lib/apiClient";


export const updateBook = async (token, id, title, url, detail, review) => {
    try {
        const res = await apiClient.put(`/books/${id}`, {title, url, detail, review}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return {res, error: null}
    } catch (e) {
        return {res: null, error: e}
    }
}
import {apiClient} from "../lib/apiClient";


export const deleteBook = async (token, id) => {
    try {
        const res = await apiClient.delete(`/books/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return {res, error: null}
    } catch (e) {
        return {res: null, error: e}
    }
}
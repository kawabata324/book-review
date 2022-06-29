import {apiClient} from "../lib/apiClient";


export const getBookDetail = async (token, id) => {
    try {
        const res = await apiClient.get(`/books/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return {res, error: null}
    } catch (e) {
        return {res: null, error: e}
    }
}

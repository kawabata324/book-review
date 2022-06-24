import {apiClient} from "../lib/apiClient";


export const postBook = async (token, title, url, detail, review) => {
    try {
        const res = await apiClient.post("/books", {title, url, detail, review}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return {res, error: null}
    } catch (e) {
        return {res: null, error: e}
    }
}
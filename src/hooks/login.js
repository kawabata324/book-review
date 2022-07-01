import {apiClient} from "../lib/apiClient";

export const login = async (email, password) => {
    try {
        const res = await apiClient.post("/signin", {
            email,
            password
        })
        return {res, error: null}
    } catch (e) {
        return {res: null, error: e}
    }
}
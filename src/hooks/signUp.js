import {apiClient} from "../lib/apiClient";

export const signUp = async (name, email, password) => {
    try {
        const res = await apiClient.post("/users", {
            name,
            email,
            password
        })
        return {res, error: null}
    } catch (e) {
        return {res: null, error: e}
    }
}
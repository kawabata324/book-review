import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://api-for-missions-and-railways.herokuapp.com",
    responseType: "json",
    headers: {
        "Content-Type": "application/json",
    }
})
import axios from "axios";
import {useSelector} from "react-redux";

export const apiClient = axios.create({
    baseURL: "https://api-for-missions-and-railways.herokuapp.com",
    responseType: "json",
    headers: {
        "Content-Type": "application/json",
    }
})

// export const test = ()=>{
//     const token = useSelector((state) => state.auth.token)
//
//     console.log(token)
// }

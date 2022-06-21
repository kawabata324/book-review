import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Signin";
import {useState} from "react";
import Home from "./views/Home";

function App() {
    const [token, setToken] = useState('')

    const updateToken = (token) => setToken(token)
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home token={token}/>}/>
                    <Route path="/signup" element={<Signup updateToken={updateToken} token={token}/>}/>
                    <Route path="/login" element={<Login updateToken={updateToken}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Signin";
import {useState} from "react";

function App() {
    const [token, setToken] = useState('')

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/signup" element={<Signup setToken={setToken}/>}/>
                    <Route path="/login" element={<Login setToken={setToken}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

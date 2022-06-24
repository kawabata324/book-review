import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Signin";
import {useState} from "react";
import Home from "./views/Home";
import Header from "./views/Header";
import Profile from "./views/Profile";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

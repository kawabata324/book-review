import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Signin";
import Home from "./views/Home";
import Header from "./views/Header";
import Profile from "./views/Profile";
import BookRegister from "./views/BookRegister";

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
                    <Route path="/new" element={<BookRegister/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

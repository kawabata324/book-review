import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Signin";
import Home from "./views/Home";
import Header from "./views/Header";
import Profile from "./views/Profile";
import BookRegister from "./views/BookRegister";
import BookDetail from "./views/BookDetail";
import BookEdit from "./views/BookEdit";

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
                    <Route path="/detail/:id" element={<BookDetail/>}/>
                    <Route path="/edit/:id" element={<BookEdit/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

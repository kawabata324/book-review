import {useDispatch, useSelector} from "react-redux";
import Image from "../logo.svg"
import {useNavigate} from "react-router-dom";
import {deleteUser} from "../redux/slice/user";

const Header = () => {
    const name = useSelector((state) => state.user_n.name)
    const dispatch = useDispatch();
    let navigate = useNavigate();


    const loginStatus = () => {
    if (!!name) {
            return (
                <div>{name}</div>
            )
        } else {
            return (
                <button onClick={() => navigate('/login')
                }>Login</button>
            )
        }
    }

    const logOut = () => {
        dispatch(deleteUser())
    }
    return (
        <div className="flex">
            <img className="logo" src={Image}></img>
            <button onClick={logOut}>Logout</button>
            <div>{loginStatus()}</div>
        </div>
    )
}

export default Header
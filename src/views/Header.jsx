import {useDispatch, useSelector} from "react-redux";
import Image from "../logo.svg"
import {useNavigate} from "react-router-dom";
import {deleteUser} from "../redux/slice/user";
import {deleteToken} from "../redux/slice/auth";

const Header = () => {
    const name = useSelector((state) => state.user_n.name)
    const dispatch = useDispatch();
    let navigate = useNavigate();


    const loginStatus = () => {
        if (!!name) {
            return (
                <div>
                    <p>{name}</p>
                    <button onClick={() => navigate('/profile')}>編集</button>
                </div>
            )
        } else {
            return (
                <button onClick={() => navigate('/login')
                }>Login</button>
            )
        }
    }

    const logOut = async () => {
        await dispatch(deleteUser())
        await dispatch(deleteToken())
        navigate('/login')
    }
    return (
        <div>
            <div className="flex">
                <img className="logo" src={Image}></img>
                <button onClick={logOut}>Logout</button>
                <div>{loginStatus()}</div>
            </div>
            <hr/>
        </div>
    )
}

export default Header
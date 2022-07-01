import {useDispatch, useSelector} from "react-redux";
import Image from "../logo.svg"
import {useNavigate} from "react-router-dom";
import {deleteUser} from "../redux/slice/user";
import {deleteToken} from "../redux/slice/auth";

const Header = () => {
    //store
    const name = useSelector((state) => state.user_n.name)
    const dispatch = useDispatch();

    let navigate = useNavigate();

    const loginStatus = () => {
        if (!!name) {
            return (
                <div className="dropdown dropdown-left">
                    <label tabIndex="0" className="text-xl">
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
                                <span className="text-3xl">{name}</span>
                            </div>
                        </div>
                    </label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-blue-100 rounded-box w-52">
                        <li>
                            <span className="text-black" onClick={() => navigate('/profile')}>Profile</span>
                        </li>
                        <li>
                            <span className="text-black" onClick={logOut}>Logout</span>
                        </li>
                    </ul>
                </div>
            )
        } else {
            return (
                <button className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
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
            <div className="flex justify-between items-center m-2">
                <img className="w-24 h-24" src={Image} onClick={() => navigate('/')}></img>
                <div>{loginStatus()}</div>
            </div>
            <hr/>
        </div>
    )
}

export default Header
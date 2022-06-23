import {useState, useEffect} from 'react'
import BaseInput from "./components/BaseInput";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import "../App.css"
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "../redux/slice/auth";
import {setUser} from "../redux/slice/user";
import {signUp} from "../hooks/signUp";
import {getUser} from "../hooks/getUser";

function Signup() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useSelector((state) => state.user_n.name)


    // このコンポーネントで管理しているstate
    const [serverError, setServerError] = useState('')

    const createUser = async (data) => {
        setServerError('')
        const name = data.name
        const email = data.email
        const password = data.password

        const {res} = await signUp(name, email, password)
        if (res !== null) {
            await dispatch(setToken(res.data.token))

            const {resUser} = await getUser(res.data.token)
            console.log(resUser)
            await dispatch(setUser(resUser.data.name))
            navigate('/')
        } else {
            setServerError('サーバーでErrorが発生しました。もう一度お試しください')
        }
    }

    useEffect(() => {
        if (!!name) {
            navigate('/')
        }
    }, [])

    return (<div>
        <h1>Sign up</h1>
        <div className="error-text">{serverError}</div>
        <div>
            <form onSubmit={handleSubmit(createUser)}>
                <BaseInput
                    label="name"
                    type="text"
                    register={register}
                    required
                    errors={errors.name}
                />
                <BaseInput
                    label="email"
                    type="email"
                    register={register}
                    required
                    errors={errors.email}
                />
                <BaseInput
                    label="password"
                    type="password"
                    register={register}
                    required
                    minLength={6}
                    errors={errors.password}
                />
                <input type="submit" value="Signup"/>
            </form>

        </div>
        <Link to="/login">ログインはこちら</Link>
    </div>)
}

export default Signup

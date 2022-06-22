import {useState} from 'react'
import BaseInput from "./components/BaseInput";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../App.css"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setToken} from "../redux/slice/auth";
import {setUser} from "../redux/slice/user";
import {login} from "../hooks/login";
import {getUser} from "../hooks/getUser";

function SignIn() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    // このコンポーネントで管理しているstate
    const [serverError, setServerError] = useState('')

    const signInUser = async (data) => {
        setServerError('')
        const email = data.email
        const password = data.password

        const {res} = await login(email, password)
        if (res !== null) {
            await dispatch(setToken(res.data.token))

            const {resUser} = await getUser(res.data.token)
            await dispatch(setUser(resUser.data.name))
            navigate('/')
        } else {
            setServerError('サーバーでErrorが発生しました。もう一度お試しください')
        }
    }


    return (
        <div>
            <h1>Sign in</h1>
            <div className="error-text">{serverError}</div>
            <div>
                <form onSubmit={handleSubmit(signInUser)}>
                    <BaseInput
                        label="email"
                        type="email"
                        register={register}
                        errors={errors.email}
                        required
                    />
                    <BaseInput
                        label="password"
                        type="password"
                        register={register}
                        errors={errors.password}
                        minLength={6}
                        required
                    />
                    <input type="submit" value="SignIn"/>
                </form>
            </div>
            <Link to="/signup">新規登録はこちら</Link>
        </div>
    )
}

export default SignIn
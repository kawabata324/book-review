import {useState} from 'react'
import BaseInput from "./components/BaseInput";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../App.css"

function SignIn() {
    const {register, formState: {errors}, handleSubmit} = useForm();

    // このコンポーネントで管理しているstate
    const [serverError, setServerError] = useState('')
    const [token, setToken] = useState('')

    const signInUser = (data) => {
        setServerError('')
        const email = data.email
        const password = data.password

        const url = "https://api-for-missions-and-railways.herokuapp.com/signin"
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        }

        fetch(url, requestOptions)
            .then((res) => res.json())
            .then((result) => {
                // INFO 成功するとtokenが返ってくる
                if (!result.token) {
                    setServerError('サーバー側で問題が発生しました。もう一度お試しください。')
                }
                setToken(result.token)
            })
            .catch((e) => {
                setServerError('サーバー側で問題が発生しました。もう一度お試しください。')
            })

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
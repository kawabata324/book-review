import {useState} from 'react'
import BaseInput from "./components/BaseInput";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../App.css"


function Signup(props) {
    const {register, formState: {errors}, handleSubmit} = useForm();
    let navigate = useNavigate();

    const {updateToken} = props
    // このコンポーネントで管理しているstate
    const [serverError, setServerError] = useState('')

    const createUser = (data) => {
        const name = data.name
        const email = data.email
        const password = data.password

        const url = "http://api-for-missions-and-railways.herokuapp.com/users"
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
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
                updateToken(result.token)
                navigate('/')

            })
            .catch(() => {
                setServerError('サーバー側で問題が発生しました。もう一度お試しください。')
            })

    }

    return (
        <div>
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
        </div>
    )
}

export default Signup

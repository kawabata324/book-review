import {useState} from 'react'
import BaseInput from "./components/BaseInput";
import { Link } from "react-router-dom";


function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [token, setToken] = useState('')

    const signInUser = () => {
        setErrors([])
        // Todo validationErrorも早期リターンする
        if (!password || !email) {
            setErrors(["空文字でsignInできません"])
            return false
        }

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
                    setErrors(["signInに失敗しました。もう一度お試しください"])
                }
                setToken(result.token)
                setEmail('')
                setPassword('')
            })
            .catch(() => {
                setErrors(["signInに失敗しました。もう一度お試しください"])
            })

    }

    return (
        <div>
            <h1>Sign in</h1>
            <div>
                <BaseInput label="email" type="email" value={email} onChange={setEmail}/>
                <BaseInput label="password" type="password" value={password} onChange={setPassword}/>
                <div>{errors}</div>
                <input type="button" value="SignIn" onClick={signInUser}/>
            </div>
            {token}
            <Link to="/signup">新規登録はこちら</Link>
        </div>
    )
}

export default SignIn
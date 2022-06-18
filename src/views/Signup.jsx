import {useState} from 'react'
import BaseInput from "./components/BaseInput";

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [token, setToken] = useState('')

    const createUser = () => {
        setErrors([])
        // Todo validationErrorも早期リターンする
        if (!name || !password || !email) {
            setErrors(["空文字で登録はできません"])
            return false
        }

        const url = "https://api-for-missions-and-railways.herokuapp.com/users"
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
                    setErrors(["signUpに失敗しました。もう一度お試しください"])
                }
                setToken(result.token)
            })
            .catch(() => {
                setErrors(["signUpに失敗しました。もう一度お試しください"])
            })

    }

    return (
        <div>
            <h1>Sign up</h1>
            <div>
                <BaseInput label="name" type="text" value={name} onChange={setName}/>
                <BaseInput label="email" type="email" value={email} onChange={setEmail}/>
                <BaseInput label="password" type="password" value={password} onChange={setPassword}/>
                <div>{errors}</div>
                <input type="button" value="Signup" onClick={createUser}/>
            </div>
        </div>
    )
}

export default Signup

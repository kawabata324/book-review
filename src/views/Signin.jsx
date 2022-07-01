import {useEffect, useState} from 'react'
import BaseInput from "./components/BaseInput";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "../redux/slice/auth";
import {setUser} from "../redux/slice/user";
import {login} from "../hooks/login";
import {getUser} from "../hooks/getUser";
import AccountForm from "./components/AccountForm";

function SignIn() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    let navigate = useNavigate();
    //Storeで管理している値
    const dispatch = useDispatch();
    const name = useSelector((state) => state.user_n.name)

    // このコンポーネントで管理しているstate
    const [serverError, setServerError] = useState('')

    const signInUser = async (data) => {
        setServerError('')

        const {res, error} = await login(data.email, data.password)

        if (res !== null) {
            await dispatch(setToken(res.data.token))

            const {resUser, error} = await getUser(res.data.token)
            if (resUser !== null) {
                await dispatch(setUser(resUser.data.name))
                navigate('/')
            } else if (error) {
                const errorMessage = error.response.data.ErrorMessageJP
                setServerError(errorMessage)
            }
        } else if (error) {
            const errorMessage = error.response.data.ErrorMessageJP
            setServerError(errorMessage)
        }
    }

    useEffect(() => {
        if (!!name) {
            navigate('/')
        }
    }, [])


    return (
        <AccountForm
            formTitle="Sign in"
            serverError={serverError}
            errors={errors}
            handleSubmit={handleSubmit}
            submitFunc={signInUser}
            submitValue={"Sign in"}
            register={register}
            linkMessage="新規登録はこちらから"
            link="/signup"
        />
    )
}

export default SignIn
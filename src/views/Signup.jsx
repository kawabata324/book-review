import {useState, useEffect} from 'react'
import BaseInput from "./components/BaseInput";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "../redux/slice/auth";
import {setUser} from "../redux/slice/user";
import {signUp} from "../hooks/signUp";
import {getUser} from "../hooks/getUser";
import AccountForm from "./components/AccountForm";

function Signup() {
    //router
    let navigate = useNavigate();

    //store
    const name = useSelector((state) => state.user_n.name)
    const dispatch = useDispatch();

    // このコンポーネントで管理しているstate
    const [serverError, setServerError] = useState('')
    const {register, formState: {errors}, handleSubmit} = useForm();

    const createUser = async (data) => {
        setServerError('')

        const {res, error} = await signUp(data.name, data.email, data.password)
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
            formTitle="Sign up"
            serverError={serverError}
            errors={errors}
            handleSubmit={handleSubmit}
            submitFunc={createUser}
            submitValue={"Sign up"}
            register={register}
            linkMessage="ログインはこちらから"
            link="/login"
            existName
        />
    )
}

export default Signup

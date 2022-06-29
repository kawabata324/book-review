import BaseInput from "./components/BaseInput";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {postUser} from "../hooks/postUser";
import {setUser} from "../redux/slice/user";
import {setLoading} from "../redux/slice/loading";
import Loading from "./components/Loading";

const Profile = () => {
    //store
    const name = useSelector((state) => state.user_n.name)
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()

    const {register, formState: {errors}, handleSubmit} = useForm();

    const updateUserName = async (data) => {
        dispatch(setLoading(true))
        const {res} = await postUser(token, data.name)
        if (res.status === 200) {
            dispatch(setUser(res.data.name))
        }
        dispatch(setLoading(false))
    }

    return (
        <Loading>
            <div className="mt-10">
                <h1 className="text-4xl text-center">Profile</h1>
                <form className="flex gap-10 items-end justify-center" onSubmit={handleSubmit(updateUserName)}>
                    <BaseInput
                        label="name"
                        type="text"
                        register={register}
                        required
                        errors={errors.name}
                        defaultValue={name}
                    />
                    <div className="btn btn-primary">
                        <input type="submit" value="変更"/>
                    </div>
                </form>
            </div>
        </Loading>
    )
}

export default Profile
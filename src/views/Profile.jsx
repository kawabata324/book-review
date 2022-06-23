import BaseInput from "./components/BaseInput";
import {useForm} from "react-hook-form";
import "../App.css"
import {useDispatch, useSelector} from "react-redux";
import {postUser} from "../hooks/postUser";
import {setUser} from "../redux/slice/user";
import {useMemo} from "react";

const Profile = () => {
    const name = useSelector((state) => state.user_n.name)
    const token = useSelector((state) => state.auth.token)

    const defaultValues = useMemo(() => {
        return {
            new_name: name
        }
    }, [name])
    const {register, formState: {errors}, handleSubmit} = useForm({defaultValues});


    const dispatch = useDispatch()
    const updateUserName = async (data) => {

        const new_name = data.new_name
        const {res} = await postUser(token, new_name)
        dispatch(setUser(res.data.name))
    }

    return (
        <div className="flex">
            <form onSubmit={handleSubmit(updateUserName)}>
                <BaseInput
                    label="new_name"
                    type="text"
                    register={register}
                    required
                    errors={errors.name}
                    placeholder={name}
                />
                <div>
                    <input type="submit" value="Update"/>
                </div>
            </form>
        </div>
    )
}

export default Profile
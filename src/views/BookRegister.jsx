import BaseInput from "./components/BaseInput";
import {useForm} from "react-hook-form";
import {postBook} from "../hooks/postBooks";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const BookRegister = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();
    const token = useSelector((state) => state.auth.token)
    let navigate = useNavigate();

    const registerBook = async (data) => {
        const title = data.title
        const url = data.url
        const detail = data.detail
        const review = data.review

        const {res} = await postBook(token, title, url, detail, review)

        if(res.status === 200){
            navigate("/")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(registerBook)}>
                <BaseInput
                    label="title"
                    type="text"
                    register={register}
                    errors={errors.title}
                    required
                />
                <BaseInput
                    label="url"
                    type="text"
                    register={register}
                    errors={errors.url}
                    required
                />
                <div>
                    <label>detail</label>
                    <textarea
                        {...register("detail", {required: true})}
                    ></textarea>
                </div>
                <div>
                    <label>review</label>
                    <textarea
                        {...register("review", {required: true})}
                    ></textarea>
                </div>
                <input type="submit" value="登録"/>
            </form>
        </div>
    )
}

export default BookRegister
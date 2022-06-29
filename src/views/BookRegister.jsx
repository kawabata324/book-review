import {useForm} from "react-hook-form";
import {postBook} from "../hooks/postBook";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import BaseBookForm from "./components/BaseBookForm";

const BookRegister = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();

    // store
    const token = useSelector((state) => state.auth.token)
    let navigate = useNavigate();

    const registerBook = async (data) => {
        const {res} = await postBook(token, data.title, data.url, data.detail, data.review)

        if (res.status === 200) {
            navigate("/")
        }
    }

    return (
        <div>
            <BaseBookForm
                formTitle="登録"
                errors={errors}
                handleSubmit={handleSubmit}
                submitFunc={registerBook}
                register={register}
                submitValue="登録"
            />
        </div>
    )
}

export default BookRegister
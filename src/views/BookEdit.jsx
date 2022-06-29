import BaseInput from "./components/BaseInput";
import {useForm} from "react-hook-form";
import {postBook} from "../hooks/postBooks";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useCallback, useEffect, useMemo, useState} from "react";
import {setLoading} from "../redux/slice/loading";
import {getBookDetail} from "../hooks/getBookDetail";
import {updateBook} from "../hooks/updateBook";
import {deleteBook} from "../hooks/deleteBook";

const BookEdit = () => {
    const params = useParams()
    const [book, setBook] = useState({})

    const {register, formState: {errors}, handleSubmit} = useForm();
    const token = useSelector((state) => state.auth.token)
    let navigate = useNavigate();


    const dispatch = useDispatch()


    const editBook = async (data) => {
        const {res} = await updateBook(token, params.id, data.title, data.url, data.detail, data.detail)
        if (res.status === 200) {
            navigate('/')
        }
    }

    const clickDeleteBook = async () => {
        const {res} = await deleteBook(token, params.id)
        if (res.status === 200) {
            navigate('/')
        }
    }

    useEffect(() => {
        const fetchBook = async () => {
            const {res} = await getBookDetail(token, params.id)
            if (!res.data.isMine) await navigate('/')
            await setBook({
                id: res.data.id,
                isMine: res.data.isMine,
                review: res.data.review,
                reviewer: res.data.reviewer,
                title: res.data.title,
                url: res.data.url,
                detail: res.data.detail
            })
        }
        fetchBook()

    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit(editBook)}>
                <BaseInput
                    label="title"
                    type="text"
                    register={register}
                    errors={errors.title}
                    defaultValue={book.title}
                    required
                />
                <BaseInput
                    label="url"
                    type="text"
                    register={register}
                    errors={errors.url}
                    defaultValue={book.url}
                    required
                />
                <div>
                    <label>detail</label>
                    <textarea
                        {...register("detail", {required: true})}
                        defaultValue={book.detail}
                    ></textarea>
                </div>
                <div>
                    <label>review</label>
                    <textarea
                        {...register("review", {required: true})}
                        defaultValue={book.review}
                    ></textarea>
                </div>
                <input type="submit" value="更新"/>
            </form>
            <button onClick={() => clickDeleteBook()}>削除</button>
        </div>
    )
}

export default BookEdit
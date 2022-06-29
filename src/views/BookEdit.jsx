import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBookDetail} from "../hooks/getBookDetail";
import {updateBook} from "../hooks/updateBook";
import {deleteBook} from "../hooks/deleteBook";
import BaseBookForm from "./components/BaseBookForm";

const BookEdit = () => {
    // このコンポーネントで管理するもの
    const [book, setBook] = useState({})
    const {register, formState: {errors}, handleSubmit} = useForm();

    // urlに含まれているparam, navigate
    const params = useParams()
    let navigate = useNavigate();

    // store
    const token = useSelector((state) => state.auth.token)


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
            // 自分のreviewでなかったら早期リターンする
            if (!res.data.isMine) await navigate('/')
            if (res.status === 200) {
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
        }
        fetchBook()

    }, [])

    return (
        <div>
            <BaseBookForm
                formTitle="編集"
                book={book}
                errors={errors}
                handleSubmit={handleSubmit}
                submitFunc={editBook}
                register={register}
                deleteFunc={clickDeleteBook}
                deleteBtn
                submitValue="編集"
            />
        </div>
    )
}

export default BookEdit
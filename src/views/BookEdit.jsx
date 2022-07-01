import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBookDetail} from "../hooks/getBookDetail";
import {updateBook} from "../hooks/updateBook";
import {deleteBook} from "../hooks/deleteBook";
import BaseBookForm from "./components/BaseBookForm";
import {setLoading} from "../redux/slice/loading";
import Loading from "./components/Loading";

const BookEdit = () => {
    // このコンポーネントで管理するもの
    const [book, setBook] = useState({})
    const {register, formState: {errors}, handleSubmit, setValue} = useForm();

    // urlに含まれているparam, navigate
    const params = useParams()
    let navigate = useNavigate();

    // store
    const token = useSelector((state) => state.auth.token)
    const loading = useSelector((state) => state.loading.isLoading)
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

    const fetchBook = async () => {
        await dispatch(setLoading(true))

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

            setValue("title", res.data.title)
            setValue("url", res.data.url)
            setValue("detail", res.data.detail)
            setValue("review", res.data.review)
        }

        await dispatch(setLoading(false))
    }

    useEffect(() => {
        (async () => {
            await fetchBook()
        })()

    }, [])

    return (
        <Loading>
            <div>
                {
                    !loading ?
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
                        /> : ''
                }

            </div>
        </Loading>
    )
}

export default BookEdit
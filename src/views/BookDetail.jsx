import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBookDetail} from "../hooks/getBookDetail";
import {setLoading} from "../redux/slice/loading";
import Loading from "./components/Loading";

const BookDetail = () => {
    const params = useParams()
    const token = useSelector((state) => state.auth.token)
    const [book, setBook] = useState({})

    const dispatch = useDispatch()

    const fetchBook = async () => {
        dispatch(setLoading(true))
        const {res} = await getBookDetail(token, params.id)
        setBook({
            id: res.data.id,
            isMine: res.data.isMine,
            review: res.data.review,
            reviewer: res.data.reviewer,
            title: res.data.title,
            url: res.data.url,
            detail: res.data.detail
        })
        dispatch(setLoading(false))
    }


    useEffect(() => {
        fetchBook()
    }, [])

    return (
        <div className="overflow-x-auto">
            <Loading>
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Detail</th>
                        <th>Url</th>
                        <th>Review</th>
                        <th>Reviewer</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.url}</td>
                        <td>{book.detail}</td>
                        <td>{book.review}</td>
                        <td>{book.reviewer}</td>
                    </tr>
                    </tbody>
                </table>
            </Loading>
        </div>
    )
}

export default BookDetail


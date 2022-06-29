import {getBooks} from "../hooks/getBooks";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setLoading} from "../redux/slice/loading";
import Loading from "./components/Loading";
import "../App.css"

const Home = () => {
    // このコンポーネントで管理する値
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(1)

    // store
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()

    let navigate = useNavigate();

    const fetchBooks = async (currentPage) => {
        dispatch(setLoading(true))

        const {res} = await getBooks(token, currentPage)
        if (res.status === 200) {
            setBooks(res.data)
        } else {
            navigate('/login')
        }
        dispatch(setLoading(false))
    }

    const formatLongString = (string) => {
        if (string.length >= 8) {
            return string.slice(0, 8) + '...'
        } else {
            return string
        }
    }

    const bookList = books.map((book) => {

        // Editに遷移するボタン
        const editButton = (
            <td>
                <button className="btn-link text-red-400" onClick={() => navigate(`/edit/${book.id}`)}>edit
                </button>
            </td>
        )

        return (
            <tr key={book.id}>
                <td className="btn-link text-blue-400">
                    <a onClick={() => navigate(`/detail/${book.id}`)}>{formatLongString(book.title)}</a>
                </td>
                <td>{formatLongString(book.review)}</td>
                <td>{formatLongString(book.reviewer)}</td>
                {book.isMine ? editButton : ''}
            </tr>
        )
    })

    const prevPage = async () => {
        await fetchBooks(page - 1)
        await setPage(page - 1)
    }

    const nextPage = async () => {
        await fetchBooks(page + 1)
        await setPage(page + 1)
    }

    useEffect(() => {
        fetchBooks(page)
    }, [])

    return (
        <div className="overflow-x-auto">
            <Loading>
                <div className="flex flex-col items-center gap-3">
                    <table className="table w-full mt-10">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Review</th>
                            <th>Reviewer</th>
                            <th>Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookList}
                        </tbody>
                    </table>
                    <div className="btn-group">
                        {page !== 1 ? <button className="btn" onClick={() => prevPage()}>«</button> :
                            <button className="btn btn-disabled">«</button>}
                        <button className="btn">Page {page}</button>
                        <button className="btn" onClick={() => nextPage()}>»</button>
                    </div>
                </div>
                <div className="mt-10 flex justify-end">
                    <button className="btn btn-accent m-5" onClick={() => navigate('/new')}>新規登録する</button>
                </div>
            </Loading>
        </div>
    )
}

export default Home
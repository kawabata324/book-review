import {getBooks} from "../hooks/getBooks";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "../App.css"

const Home = (props) => {
    const {token} = props
    const [books, setBooks] = useState([])

    let navigate = useNavigate();

    const fetchBooks = async () => {
        const {res, error} = await getBooks(token)
        if (res) {
            setBooks(res.data)
        } else {
            console.log(error)
            navigate('/login')
        }
    }

    const bookList = books.map((book) => {
        return (
            <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.detail}</td>
                <td>{book.review}</td>
                <td>{book.reviewer}</td>
            </tr>
        )
    })

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Detail</th>
                    <th>Review</th>
                    <th>Reviewer</th>
                </tr>
                </thead>
                <tbody>
                {bookList}
                </tbody>
            </table>
        </div>
    )
}

export default Home
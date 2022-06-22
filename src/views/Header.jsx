import {useSelector} from "react-redux";

const Header = () => {
    const name = useSelector((state) => state.user.name)

    console.log(name)
    return (
        <div>
            {name || 'テスト'}
        </div>
    )
}

export default Header
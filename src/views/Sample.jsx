import {useEffect, useState} from "react";

const Sample = () => {
    const [count, setCount] = useState(() => {
        return Math.floor(Math.random() * 10) + 1
    })

    const [open, setOpen] = useState(true)

    // useEffect
    useEffect(() => {
        /* 第一引数には実行させたい副作用関数を記述*/
        document.title = `${count}回クリックされました。`
        // console.log(`再レンダーしました`)
        return () => {
            console.log('クリーンアップ関数です')
        }
    }, [count])/* 第二引数には副作用関数の実行タイミングを制御する依存データを記述 */

    // useState
    // 関数コンポーネントでstateを管理(stateの保持と更新)するためのReactフック
    // stateとはコンポーネントが内部で保持する「状態」のことで、画面上に表示されるデータ・アプリケーションが保持している状態を示しています。
    // stateはpropsと違い、後から変更できる

    const initialState = Math.floor(Math.random() * 10) + 1

    const toggle = () => {
        setOpen((prev) => {
            return !prev
        })
    }

    const addPlusOne = async () => {
        await setCount((prev) => {
            return prev + 1
        })
    }

    // useEffect(() => {
    //     document.title = `${count}回クリックされました。`
    // })

    // document.title = `${count}回クリックされました`

    return (
        <>
            <button onClick={toggle}>
                {open ? 'close' : 'open'}
            </button>
            <div className={open ? "flex flex-col" : "hidden"}>
                <p>現在の数字は {count} です</p>
                <button
                    onClick={addPlusOne}
                >
                    + 1
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                >
                    - 1
                </button>
                <button onClick={() => setCount(0)}>0</button>
                <button onClick={() => setCount(initialState)}>
                    最初の数値に戻す
                </button>
            </div>
        </>
    )
}

export default Sample
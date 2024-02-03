// import React, { useState } from 'react'
// // 记忆函数 usestate可以记住状态，就不会每次都清零，而能够累加

// export default function practical7() {

//     const [count, setCount] = useState(0)
//     var mycount = 0
//     return (
//         <div>
//             <button onClick={() => {
//                 setCount(count + 1)
//                 mycount++
//             }}>click</button> {count}-{mycount}
//         </div>
//     )
// }



import React, { useCallback, useMemo, useState } from 'react'

export default function Prac17() {

    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", 'bb', 'ccc']);           // 定义初始值时只能有一个参数
    const [myname, setMyname] = useState("kuangkuang1")

    const handleChange = useCallback(
        (event) => {
            setText(event.target.value)
        }, []
    );
    //  空数组，则每一次执行都会用之前缓存的函数，则变量也是之前缓存的值，即为空字符串，就不能进行新添加
    // 所以要靠依赖

    const handleAdd = useCallback(
        () => {
            console.log(text);
            setList([...list, text]);
            setText("")

        }, [text, list]);
    // 即时name值改变，它也依赖于text和list的变化，就不会改变

    const handleDel = useMemo(
        () => (index) => {
            var newlist = [...list]                                       // 不能直接改变列表 创建一个新列表进行改变
            newlist.splice(index, 1)
            setList(newlist)
        }, [list]);
    // usememo返回第一个函数的值


    return (
        <div>
            {myname}<button onClick={
                ()=>setMyname("kuangkuang2")
            }>change-name</button>
            <input onChange={handleChange} value={text}></input>
            <button onClick={handleAdd}>add</button>
            <ul>
                {
                    list.map((item, index) =>
                        <li key={item}>{item}
                            <button onClick={() => { handleDel(index) }}>del</button>     {/* 自动执行handledel函数 */}
                        </li>

                    )
                }
            </ul>
            {list.length === 0 && <div>暂无</div>}

        </div>
    )
}

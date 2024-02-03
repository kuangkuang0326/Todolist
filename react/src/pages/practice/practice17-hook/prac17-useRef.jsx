import React, { useRef, useState } from 'react'
// uesref版todo

export default function prac17() {


    const [list, setList] = useState(["aa", 'bb', 'ccc'])
    const text = useRef()
    // useRef绑在组件和dom上
    // 相当于React.createRef()
    // 并且在使用时不用this，在函数内部的ref，其为一个临时变量，直接用咯

    const handleAdd = () => {
        console.log(text.current.value)
        setList([...list, text.current.value])
        text.current.value = ""

    }


    const handleDel = (index) => {
        var newlist = [...list]
        newlist.splice(index, 1)
        setList(newlist)
    }

    return (
        <div>
            <input ref={text}></input>
            <button onClick={handleAdd}>add</button>
            <ul>
                {
                    list.map((item, index) =>
                        <li key={item}>{item}
                            <button onClick={() => { handleDel(index) }}>del</button>
                        </li>

                    )
                }
            </ul>
            {list.length === 0 && <div>暂无</div>}

        </div>
    )
}


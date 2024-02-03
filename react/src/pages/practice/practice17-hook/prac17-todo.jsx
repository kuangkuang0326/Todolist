import React, { useState } from 'react'

export default function prac17() {

    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", 'bb', 'ccc'])           // 定义初始值时只能有一个参数

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleAdd = () => {
        console.log(text)
        setList([...list, text])                                    // 在末尾加上最新的数据
        setText("")                                                 // 将输入框清空
    }
    

    const handleDel = (index) => {
        var newlist = [...list]                                       // 不能直接改变列表 创建一个新列表进行改变
        newlist.splice(index, 1)
        setList(newlist)
    }

    return (
        <div>
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

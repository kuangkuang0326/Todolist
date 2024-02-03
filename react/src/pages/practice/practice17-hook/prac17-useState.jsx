import React, { useState } from 'react'

export default function prac171() {

    var [name, setName] = useState("kuangkuang1")
    // 状态和改变状态的唯一方法 初始值只能有一个值
    var [age, setAge] = useState("18")                     // 状态写多个
    return (
        <div>
            <button onClick={() => {
                setName('kuangkuang2')
                setAge("19")
            }}>click</button>
            {name}-{age}
        </div>
    )
}

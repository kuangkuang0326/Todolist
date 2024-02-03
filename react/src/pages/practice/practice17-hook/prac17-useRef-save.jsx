import React, { useRef, useState } from 'react'

// 计数器证明useref存值

export default function Prac17() {
    const [count, setCount] = useState(0);
    var mycount1 = 0
    var mycount2 = useRef(0)
    return (
        <div>

            <button onClick={() => {
                setCount(count + 1),
                    mycount1++
                mycount2.current++
            }
            }>click</button>
            {count}-{mycount1}-{mycount2.current}
        </div >
    )
}

import React, { Children, Component, useEffect, useState } from 'react'

export default function Prac17() {
    const [isCreated,setIsCreated]=useState(true)
   
        return (
            <div>
                <button onClick={() =>
                   setIsCreated(!isCreated)
                }>click</button>
                {isCreated && <Child></Child>}
            </div>
        )
    }


function Child() {
    useEffect(() => {
        window.onresize = () => {
            console.log("resize")
        }
        var timer=setInterval(() => {
            console.log("111")
        }, 1000)

        return ()=>{
            console.log("组件销毁")
            window.onresize=null
            clearInterval(timer)
        }
    }, [])
    return <div>
        children
    </div>
}





// class Child extends Component {
//     render() {
//         return <div>
//             Children
//         </div>
//     }

//     componentDidMount() {                          // 为window.onresize事件添加一个事件监听器
//         window.onresize = () => {
//             console.log("resize")
//         }
//         this.timer = setInterval(() => {
//             console.log("111")
//         }, 1000)
//     }

//     componentWillUnmount() {                       // 在组件被移除前清理资源或执行任何必要操作
//         console.log(" componentWillUnmount")
//         window.onresize = null
//         clearInterval(this.timer)
//     }
// }
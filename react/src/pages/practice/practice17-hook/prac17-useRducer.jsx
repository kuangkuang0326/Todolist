// import React, { useReducer } from 'react'

// export default function Prac17() {
//     const [state, dispatch] = useReducer(reducer, intialState)
//     // 第一个参数为函数，第二个参数为初始状态值

//     return (
//         <div>
//             <button onClick={() => {
//                 dispatch({
//                     type: "kuangkuang1"
//                 })
//             }}>-</button>
//             {state.count}
//             <button onClick={() => {
//                 dispatch({
//                     type: "kuangkuang2"
//                 })
//             }}>+</button>
//         </div>
//     )
// }

// const reducer = (prevState, action) => {
//     console.log("reducer", prevState, action);

//     let newState = { ...prevState }
//     switch (action.type) {
//         case "kuangkuang1":
//             newState.count--
//             return newState
//         case "kuangkuang2":
//             newState.count++
//             return newState
//         default:
//             return prevState
//     }
// }

// const intialState = {
//     count: 0,

// }

import React, { useContext, useReducer } from 'react'

const Globalcontext = React.createContext()

export default function prac17() {
    const [state, dispatch] = useReducer(reducer, initialState)
    // 1.
    return (
        <Globalcontext.Provider value={
            {
                state,
                dispatch
            }
        }>
            <div>
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </div>
        </Globalcontext.Provider>
    )
}
const reducer = (preState, action) => {
    let newState = { ...preState }
    switch (action.type) {
        case "change2":
            newState.a = action.value
            return newState
        case "change3":
            newState.b = action.value
            return newState
        default:
            return preState
    }
}
const initialState = {
    a: "111",
    b: "222"

}
function Child1() {
    const { dispatch } = useContext(Globalcontext)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: "change2",
                    value: "222"
                })
            }}>change2</button>
            <button onClick={() => {
                dispatch({
                    type: "change3",
                    value: "333"
                })
            }}>change3</button>
        </div>
    )
}

function Child2() {
    const { state } = useContext(Globalcontext)
    return (
        <div>
            {state.a}
        </div>
    )
}

function Child3() {
    const { state } = useContext(Globalcontext)
    return (
        <div>
            {state.b}
        </div>
    )
}
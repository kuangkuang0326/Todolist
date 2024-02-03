import React, { Component } from 'react'

// export default class practice8 extends Component {
//     state = {
//         list: ['11', '222', '33333']
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.list.map(item =><li key={item}>{item}</li>)}
//             </div>
//         )
//     }
// }

// 为了列表的复用和重排而设置k值  不涉及列表的增加删除，设置成索引值是可以的
// 把一个给定的数组增加到页面中，在箭头函数中就不用字符串模板，引号不会被解析，直接写标签，此时item为一个临时变量



export default class practice8 extends Component {
    state = {
        list: ['111', '222', '33333']
    }

    render() {
        var newlist = this.state.list.map(item => <li>{item}</li>)

        // 在 JavaScript 中，类的定义体（class body）内只能包含方法和属性的声明，不能包含任何可执行的语句
        // 因此 var 的声明语句需要写在render方法中 不能直接写在类中

        return (
            <div>
                {newlist}
            </div>
        )
    }
}
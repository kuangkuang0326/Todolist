import React, { Component } from 'react'
// 表单中的受控组件  双向绑定？
// 用状态传值给输入框，再用输入框改变状态更新打印

export default class practice14 extends Component {
    state = {
        value: 'username'
    }
    render() {

        return (
            <div>
                <h3>表单</h3>
                {/* input看成一个组件 */}
                <input type='text' value={this.state.value} onChange={(event) => {
                    console.log(event.target.value)
                    // onChang，一个事件处理属性，在这里它接受一个event变化事件，event.target指触发事件的html元素，value为当前值
                    this.setState({
                        value: event.target.value
                    })
                }}>

                </input>
                <button onClick={() => {
                    console.log(this.state.value)
                }}>设置</button>
                <button onClick={() => {
                    this.setState({
                        value: ""
                    })
                }}>重置</button>



            </div>
        )
    }
}
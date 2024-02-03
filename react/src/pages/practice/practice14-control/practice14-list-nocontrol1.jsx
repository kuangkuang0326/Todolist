import React, { Component } from 'react'
// 表单中的非受控组件
// react要编写一个非受控组件，可以使用ref来从dom节点中获取表单数据，就是非受控组件
export default class practice14 extends Component {
    username = React.createRef()
    render() {

        return (
            <div>
                <h3>表单</h3>
                <input type='text' ref={this.username} defaultValue={aaa}></input>
                <button onClick={() => {
                    console.log(this.username.current.value)
                }}  >设置</button>
                <button onClick={() => {
                    this.username.current.value = ""
                }}>重置</button>



            </div>
        )
    }
}

import React, { Component } from 'react'
// 父子通信 弹出导航栏
// 父传子：传属性  子传父：回调函数

class Sidebar extends Component {
    render() {
        return <div style={{ background: "rgb(100,109,147)", width: "100px" }}>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
            <li>1111111</li>
        </div>
    }
}

class Navabar extends Component {
    render() {
        return <div style={{ background: "lightgrey", height: "30px", textAlign: "center" }}>
            这是一个导航栏
            <button onClick={
                () => {
                    console.log(this.props.event())                              // 让子组件调用父组件的函数
                }
            }>click</button>
        </div>
    }
}

export default class practice15 extends Component {
    state = {
        isShow: false
    }
    render() {
        return (
            <div>
                <Navabar event={() => {                                         // 给子组件一个属性：一个回调函数
                    this.setState({
                        isShow: !this.state.isShow                              // 通过状态改变弹出导航栏
                    })
                }}></Navabar>

                
                <button onClick={
                    () => {
                        this.setState({
                            isShow: !this.state.isShow
                        })
                    }
                }>click</button>
                {this.state.isShow && <Sidebar></Sidebar>}
            </div>
        )
    }
}

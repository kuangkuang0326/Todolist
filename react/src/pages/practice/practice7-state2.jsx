import React, { Component } from 'react'
// 二：用构造函数constructor
export default class practice7 extends Component {

    constructor() {
        super(); {/**super() 必须要写！ 继承用 */ }
        this.state = {
            text: "收藏",
            show: true,
            myName: true
        }
    }

    render() {
        return (
            <div>
                <h1>react-{this.state.myName ? "kuangkuang" : "gaga"}</h1>
                <button onClick={() => {
                    this.setState({
                        /** setState 一次更新多个状态并与 state 对象里的键值对前后对比，不同的就改变 */
                        show: !this.state.show,
                        myName: !this.state.myName
                    })
                    if (this.state.show) {
                        console.log("收藏的逻辑")
                    } else {
                        console.log("取消收藏的逻辑")
                    }
                }}> {this.state.show ? "收藏" : "取消收藏"}</button>

            </div>
        )
    }
}

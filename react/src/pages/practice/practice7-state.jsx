import React, { Component } from 'react'

{/**状态：状态就是组件描述某种显示情况的数据，由组件自己维护，使用状态的目的是为了在不同状态下是组件的显示不同（自我管理）
 */}
export default class practice7 extends Component {
    state = {
        text: "收藏",
        show: true
    }
    render() {
        return (
            <div>
                <h1>react</h1> <button onClick={() => { this.setState({ text: "取消收藏" }) }}> {this.state.text}</button>
                {/* noClick,点击之后触发this.setstate,text值 间接 改变，前后值不一致则按钮变为“取消收藏” */}
                <h1>react</h1> 
                <button onClick={() => { 
                    this.setState({
                     show: !this.state.show 
                    })   
                    if(this.state.show){
                        console.log("收藏的逻辑")
                    }else{
                        console.log("取消收藏的逻辑")
                    }
                } }> {this.state.show ? "收藏" : "取消收藏"}</button>
                {/**利用三木运算符，不断改变按钮 */ }
                {/* this.setstate里面用取反来改变show的值，此时不再是改变内容，而是改变true flase来决定三目运算符的结果 */ }
            
            </div >
        )
    }
}

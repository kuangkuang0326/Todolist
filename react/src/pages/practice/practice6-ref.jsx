import React, { Component } from 'react'

export default class practice5 extends Component {
  myref = React.createRef()
  render() {

    return (
      <div>
        <input ref="username"></input><button onClick={() => { console.log("click1", this.refs.username.value) }}>add1</button>
        {/* 写法一：给标签设置ref，即为引用，通过这个获取this.refs.username.value,ref可以获取真实的dom */}
        <input ref={this.myref}></input><button onClick={() => { console.log("click1", this.myref.current.value) }}>add2</button>
        {/* 写法二：创建一个对象myref（添加一个新属性），再将这个对象绑在ref上   .current拿到原生模式之后再.value就能得到真实的dom */}

        <button onClick={this.handleClick2}>add3</button>


      </div>
    )
  }
  handleClick2 = () => {
    console.log("click2", this.myref.current.value)
  }
}
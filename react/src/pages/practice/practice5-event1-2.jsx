import React, { Component } from 'react'

export default class practice5 extends Component {
  a = "1000"
  render() {
    return (
      <div>
        <input></input><button onClick={() => { console.log("click1", this.a) }}>add1</button>      {/*响应式写法一*/}
        <input></input><button onClick={this.handleClick1.bind(this)}>add2</button>         {/*handleClick后不用加()否则，还没点击按钮程序就自动执行了*/}
        <input></input><button onClick={this.handleClick2}>add3</button>                    {/*利用bind改变this反向 */}
        <input></input><button onClick={() => { this.handleClick3() }}>add3</button>        {/*这里的 this.handleClick 函数调用没有直接执行，那么在需要传参就比较好用 */}
      </div>
    )
  }

  handleClick1() {
    console.log("click2", this.a); {/*写法二*/ }
  }
  handleClick2 = () => {
    console.log("click3", this.a); {/*写法三*/ }

  }
  handleClick3 = () => {
    console.log("click4", this.a); {/*写法三*/ }

  }

}

// class A {
//   constructor(){
//     this.a="111"
//     this.b="222"
//   }

// c="333"

//   aaa(){

//   }

//   bbb(){
// this.ccc()
//   }
//   ccc(){

//   }
// }
// console.log(new A())


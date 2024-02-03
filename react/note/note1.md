#### 类组件

1.创建组件前导入react  组件名称首字母大写 组件继承react component 组件创建完导出
2.在index.js文件中导入类组件 import componentname from+路径
3.创建好的类组件在index.js文件中直接化为标签使用

```Javascript
import React from 'react'
// 引入
class Practiceapp extends React.Component {
    //  创建practiceapp类组件   extends 继承react  首字母大写
    render() {
        return <div>
            <div>111</div>
            <div>222</div>
        </div>
    }

}

export default Practiceapp
// 导出
```

#### 函数式组件

一样写函数，导出导入

```Javascript
// 函数式组件 一样写函数、导出导入
function practice2() {
    return <div>
        内容二
        <div>内容一</div>
    </div>
}

export default practice2
```

#### 组件嵌套

```Javascript
import React, { Children, Component } from "react"

class Child extends Component {
    render() {
        return <div>child</div>
    }
}
class Navabar extends Component {
    render() {
        return <div>Navabar
            <Child></Child>
            {/* 意为在navavar中再嵌套一个child组件 */}
        </div>
    }

}

function Sviper() {
    return <div>Sviper</div>
}

const Tabbar = () => {
    return <div>Tabbar</div>
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                {/* 在根组件中嵌套三个组件，要继续嵌套需写在相应组件各自内部，而不是写在这里 */}
                <Navabar></Navabar>

                <Sviper></Sviper>

                <Tabbar></Tabbar>

            </div>
        )
    }
}
```

#### 组件样式

可以行内写，然后在组件内声明;也可以外部引入
background-color等带横杠的需写成驼峰式：backgroundColor
class 与 for 两个标签需写成className 与 htmlFor

```Javascript
import React, { Component } from "react"
import './practice.css' //导入css模块 webpack的支持

export default class Practiceapp extends Component {
    render() {
        var myname = "kuangkuang"
        let obj = {
            background: "blue"
            // 另外，如果写background-color就要写成驼峰写法：backgroundColor
        }
        return (
            <div>
                {10 + 20}-{myname}
                {/* 逻辑表达式代码写在{ }内但不能写语句 ，写外部变量*/}

                <div style={obj}>111111111</div>
                <div style={{ background: "red" }}>22222222</div>
                {/* 给虚拟dom加行内样式 style后必须跟对象，不能直接css，对象就要声明；key:value 的形式表示键值 */}

                <div className="native">3333333</div>
                <lable htmlFor="username" >用户名</lable><input type="text" id="username"></input>
                {/* for标签和class一样，为避免与javascript关键字冲突，写为htmlFor */}


            </div>
        )

    }
}
```

#### 事件处理

```Javascript
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
```

##### this方向改变

this方向改变有三种方法:call apply bind

```Javascript
eg:
var obg1 = {
  name: 'obj1',
  getName() {
    console.log(this.name)
  }
}
var obg2 = {
  name: 'obj2',
  getName() {
    console.log(this.name)
  }
}

Obj1.getName()
obj2.getName(); {/*此时执行各自方法输出obj1、obj2 */ }
obj1.getName.call(obj2); {/*将this方向改成obj2，并且自动执行 */ }
obj1.getName.apply(obj2); {/*与call类似，将方向改变之后也自动执行 */ }
obj1.getName.bind(obj2); {/*将方向改变之后并不会自动执行 */ }
obj1.getName.bind(obj2)(); {/*bind返回一个新函数，只有加了（）手动执行，方法才能被调用 */ }
```

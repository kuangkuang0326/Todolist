import React, { Component } from 'react'

export default class practice9 extends Component {
  myRef = React.createRef()

  state = {
    list: [{
      id: 1, text: "aaa"
    },
    {
      id: 2, text: "bbb"
    },
    {
      id: 3, text: "ccc"
    }]
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item, index) =>              // map有两个属性，一个内容，一个索引号
              <li key={item.id}>{item.text}<button onClick={() => this.handleDelClick(index)}>删除</button></li>
                                                           // 这个位置也可以不用箭头函数写  this.handleDelClick.bind(item,index)
            
              )
          }
        </ul>
        <div>
          <input ref={this.myRef}></input>
          <button onClick={this.handleClick2}>
            add2
          </button>
        </div>
      </div>
    )


  }

  handleClick2 = () => {
    console.log("click2", this.myRef.current.value)

    // this.state.list.push(this.myRef.current.value)   不能直接改变
    var newlist = [...this.state.list]                    // ...扩展原来的list再赋给newlist，这样newlist的值改变不会影响到原来的list
    newlist.push({
      id: Math.random() * 1000000,
      text: this.myRef.current.value
    })                                                    // 改变newlist

    this.setState(                                        // 将newlist给react？
      { list: newlist }
    )
  }

  handleDelClick = (index) => {              // 删除法一   把索引值传到函数里
    console.log("del this", index)
    
    let newlist = this.state.list.concat()   // 一样的，复制列表 contract（）方法创建一个新数组，其中包含原始数组的所有元素
    newlist.splice(index, 1)                 // 从index位置开始删除，删除一个元素，不添加新东西
   
    this.setState(                           //  让页面重新刷新
     { list:newlist}
    )
  }



}

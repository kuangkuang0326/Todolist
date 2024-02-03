import React, { Component } from 'react'
import './practice.css'

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
                        this.state.list.map((item, index) =>                    
                            <li key={item.id}>{item.text}<button onClick={() => this.handleDelClick(index)}>删除</button></li>
                        )
                    }
                </ul>
                <div>
                    <input ref={this.myRef}></input>
                    <button onClick={this.handleClick2}>
                        add2
                    </button>
                </div>

                {/* { this.state.list.length===0 ? <div>暂无待办事件</div>:null}                              待办法一：条件为 列表长度为零是否为真 */}

                {/* {this.state.list.length === 0 && <div>暂无待办事件</div>}                                 待办法二： 与符号 如果前面为真，则执行后面；为假则不执行 */}

                <div className={this.state.list.length === 0 ? null : 'hidden'}>暂无待办事件</div>            {/*待办法三： 三目运算符与css */}

            </div>
        )


    }

    handleClick2 = () => {
        console.log("click2", this.myRef.current.value)

        // this.state.list.push(this.myRef.current.value)   不能直接改变
        var newlist = [...this.state.list]                              /
        newlist.push({
            id: Math.random() * 1000000,
            text: this.myRef.current.value
        })                                                              

        this.setState(                                                  
            { list: newlist }
        )

        this.myRef.current.value = ""
    }

    handleDelClick = (index) => {                                      
        console.log("del this", index)

        let newlist = this.state.list.concat()                          
        newlist.splice(index, 1)                                       

        this.setState(                                                  
            { list: newlist }
        )

    }

}
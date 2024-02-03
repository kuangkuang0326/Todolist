import React, { Component } from 'react'
import './practice12.css'
import Center from './practice12-Center'
import Cinema from './practice12-Cinema'
import Film from './practice12-Film'

export default class practice12 extends Component {
    state = {
        list: [
            {
                id: 1,
                text: "电影"
            },
            {
                id: 2,
                text: "影院"
            },
            {
                id: 3,
                text: "我的"
            }
        ],
        current: 0
    }
    render() {
        return (
            <div>
                                                                             {/* 切换选项卡法一 */}
                {/* {                                                          

                    this.state.current === 0 && <Film></Film>
                }
                {
                    this.state.current === 1 ? <Cinema></Cinema>:''
                }
                <Center className={this.state.current === 2 ? '' : 'hidden'}>
                </Center> */}                                                                       
                <ul>
                    {
                        this.state.list.map(
                            (item, index) =>
                                <li key={
                                    item.id
                                }
                                    className={
                                        this.state.current === index ? 'active' : ''
                                    }
                                    onClick={() =>
                                        this.handleClick(index)
                                    }>
                                    {item.text}
                                </li>
                        )
                    }
                </ul>

                {
                    this.solve()
                }

            </div>
        )
    }

    handleClick(index) {
        console.log(index)
        this.setState({                                      // 每次setstate都会重新执行render函数
            current: index
        })
    }

    solve() {                                                // 切换选项卡法二
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
        }
    }
}

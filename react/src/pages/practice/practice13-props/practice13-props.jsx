import React, { Component } from 'react'
import Navabar from './practice13-Navabar'

export default class practice13 extends Component {
 
  render() {
    return (
      <div>
        <div>

          <h2>首页</h2>
          <Navabar title="首页" leftbutton={false} ></Navabar>                   {/* 把属性值从父组件传给navabar */}
        </div>
        <div>
          <h2>列表</h2>
          <Navabar title="列表" ></Navabar>
        </div>
        <div>
          <h2>主页</h2>
          <Navabar title="主页" ></Navabar>
        </div>

        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}


// 默认属性   默认navabar的leftbutton和rightbutton属性为true，这样就不用每个navabar标签都写一遍属性值
// Navabar.defaultProps = {
//   leftbutton: true,
//   rightbutton: true
// }

// 将这个默认属性添加到navabar的类中

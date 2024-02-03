import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom"

export default function Message() {
  const [Message] = useState([
    { id: 1, title: "message1", content: "好好吃饭" },
    { id: 2, title: "message2", content: "美美睡觉" },
    { id: 3, title: "message3", content: "好好心情" }
  ])
  return (
    <div>
      <ul>
        {
          Message.map(item => {
            return (
              // 1.传递params参数，在路径后面用 / 进行拼接
              <li key={item.id}><Link to={`Detail/Detail/${item.id}/${item.title}/${item.content}`}>{item.title}</Link></li>
            )
          })
        }
      </ul>
      <ul>
        {/* 2.在路由表中定义接收参数 path："Detail/:id/:title/:content" */}
        {/* 3.路由占位表 */}
        <Outlet></Outlet>

      </ul>
    </div>
  )
}

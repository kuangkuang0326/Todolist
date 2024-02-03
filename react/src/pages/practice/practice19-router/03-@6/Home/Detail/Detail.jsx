import React from 'react'
import { useParams, useMatch } from "react-router-dom"

export default function Detail() {

  const { id, title, content } = useParams()
  // 1.detail接收参数组件，调用useparams（）hooks，获得传递过来的params参数，返回一个参数对象，可以通过解构得出数据
  const data=useMatch('/Home/Detail/Detail/:id/:title/:content')
  // 2.调用usematch（），传入完整路径，也可以获取到params数据
  console.log(data)
  
  return (
    <div>
      <ul>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息内容：{content}</li>
      </ul>
    </div>
  )
}

import React from 'react'
import Home from './Home'
import About from './About'
import { Navigate } from "react-router-dom"
import News from "./Home/News"
import Message from "./Home/Message"
import Detail from "./Home/Detail/Detail"


const routes = [
  {
    path: '/Home',
    element: <Home />,
    // 路由嵌套，先在路由映射表使用children选项实现嵌套路由，再在相应组件中（这里是home）设置路由占位符
    children: [
      { path: 'News', element: <News></News> },
      {
        path: 'Message', element: <Message></Message>, children: [
          {
            path: "Detail/Detail/:id/:title/:content",
            element: <Detail></Detail>
          }
        ]
      }
    ]
  },
  {
    path: '/About',
    element: <About />
  },
  {
    path: '/',
    element: <Navigate to="/Home"></Navigate>
  }
]

export default routes

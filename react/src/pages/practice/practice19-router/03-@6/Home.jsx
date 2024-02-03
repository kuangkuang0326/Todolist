import React from 'react'
import {NavLink,Outlet} from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h3>Home</h3>
      <ul>
        <li>
          <NavLink className="router-home" to="/Home/News">新闻</NavLink>
        </li>
        <li>
          <NavLink className="router-home" to="/Home/Message">消息</NavLink>
        </li>
      </ul>
      <ul>
      
        {/* 路由占位符 */}
        <Outlet></Outlet>
      </ul>

    </div>
  )
}

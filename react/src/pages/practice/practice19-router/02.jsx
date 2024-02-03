import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Prac19() {
    return (
        <div>
            <ul>
                {/* 声明式导航 */}
                <li>
                    <NavLink to="/Films" className="">电影</NavLink>
                </li>
                <li>
                    <NavLink to="/Cinemas" className="">影院</NavLink>
                </li>
                <li>
                    <NavLink to="/Center" className="">我的</NavLink>
                </li>
            </ul>

        </div>
    )
}





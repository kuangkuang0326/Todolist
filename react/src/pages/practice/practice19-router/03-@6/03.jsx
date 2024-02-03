import React from 'react'
import { Link, Route, Navigate, Routes ,useRoutes} from "react-router-dom"
// import About from "../03-@6/About"
// import Home from "./Home"
import routes from './routes'


export default function Prac19() {
    return (
        <div>
            {/* 设置路由链接 */}
            <Link className='router-practice' to="/About">About</Link>
            <Link className='router-practice' to="/Home">Home</Link>

            {/* <Routes>
                <Route path="/About" caseSensitive element={<About></About>}></Route>
                <Route path="/Home" element={<Home></Home>}></Route>
                路由重定向
                <Route path="/" element={<Navigate to="/About"></Navigate>}></Route>
            </Routes> */}
            {useRoutes(routes)}
        </div>
    )
}

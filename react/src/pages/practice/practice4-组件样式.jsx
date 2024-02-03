import React, { Component } from "react"
import './practice.css' //导入css模块 webpack的支持

export default class Practiceapp extends Component {
    render() {
        var myname = "kuangkuang"
        let obj = {
            background: "blue"
            // 另外，如果写background-color就要写成驼峰写法：backgroundColor
        }
        return (
            <div>
                {10 + 20}-{myname}
                {/* 逻辑表达式代码写在{ }内但不能写语句 ，写外部变量*/}

                <div style={obj}>111111111</div>
                <div style={{ background: "red" }}>22222222</div>
                {/* 给虚拟dom加行内样式 style后必须跟对象，不能直接css，对象就要声明；key:value 的形式表示键值 */}

                <div className="native">3333333</div>
                <lable htmlFor="username" >用户名</lable><input type="text" id="username"></input>
                {/* for标签和class一样，为避免与javascript关键字冲突，写为htmlFor */}


            </div>
        )

    }
}
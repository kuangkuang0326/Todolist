import React from 'react'

export default function Sidebar(props) {
  // 函数式组件没有this，用形参来传属性  没有状态

  var obj1 = {
    left: 0
  }

  var right = {
    right: 0
  }

  var obj = {
    background: decorate,
    width: "100px",
    position: "fixed"
  }

  var styleobj = position === "left" ? { ...obj1, ...obj } : { ...obj2, ...obj }
  
  let { decorate } = props

  return (
    <div style={styleobj}>
      <ul>11111</ul>
      <ul>11111</ul>
      <ul>11111</ul>
      <ul>11111</ul>
      <ul>11111</ul>
      <ul>11111</ul>
    </div>
  )
}

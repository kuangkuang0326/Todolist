import React, { Component } from 'react'
import Navabar from './practice13-Navabar'
import Sidebar from './practice13-sidebar'

export default class practice13 extends Component {
  render() {
    return (
      <div>
        <Navabar title="首页"></Navabar>

        <Sidebar decorate='skyblue'></Sidebar>
      </div>
    )
  }
}

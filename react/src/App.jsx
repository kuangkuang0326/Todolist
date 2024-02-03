import React, { useState } from 'react'
import './App.css'
// import Todolist from './pages/todolist/todolist'
import RenderList from './pages/todolist/Render-list'
import AddDel from "./pages/todolist/Add-Del"
import Edit from "./pages/todolist/Edit"
// import {BrowserRouter} from "react-router-dom"
// import Text from "./pages/practice/practice14-control/practice14-todolist-control"



function App() {
  const [count, setCount] = useState(0)

  // list用以增删事件改变
  const [list, setList] = useState([])
  // viewlist 用以存储所有事件
  const [viewList, setviewList] = useState([])
  // const [checked, setChecked] = useState(false)

  const CurrentUserContext = React.createContext()

      // 这里是渲染列表
      const addlist = (text) => {
        const newlist = {
            id: Math.random() * 1000000,
            text: text,
            checked: false,
            isEditing: false
        };
        // var additionList=[[...list, newlist]]
        setviewList([...list, newlist])
        setList([...list, newlist])
    }

  return (<div>
    {/* <BrowserRouter> */}
    {/* <Todolist /> */}

    <CurrentUserContext.Provider
      value={{ list, setList, viewList, setviewList }}>
      <RenderList CurrentUserContext={CurrentUserContext} addlist={addlist}></RenderList>
      <Edit CurrentUserContext={CurrentUserContext}></Edit>
      <AddDel CurrentUserContext={CurrentUserContext}></AddDel>
    </CurrentUserContext.Provider>
    {/* </BrowserRouter> */}
  </div>

  )
}

export default App

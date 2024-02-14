import React, { useState } from 'react'
import AddDel from '../component/Add-Del/Add-Del'
import Edit from '../component/Edit'
import Header from '../component/header'
import Footnote from '../component/Footnote'
import './App.css'


function App() {
  // list用以增删事件改变
  const [list, setList] = useState([])
  // viewlist 用以存储所有事件
  const [viewList, setviewList] = useState([])

  const CurrentUserContext = React.createContext()

  // 渲染列表
  const addlist = (text) => {
    const newlist = {
      id: Math.random() * 1000000,
      text: text,
      checked: false,
      isEditing: false
    };
    setviewList([...list, newlist])
    setList([...list, newlist])
  }


  const listFunctions = {
    handleClear: () => {
      console.log("del")
      setviewList((prevViewList) => {
        const newFilterList = prevViewList.filter((item) => !item.checked);
        setList(newFilterList);
        return newFilterList
      })
    },

    handleCompleted: () => {
      console.log('complete')
      var newlist = [...viewList]
      var newFilteList = newlist.filter(
        item => item.checked == true)

      setList(newFilteList)
    },

    handleActive: () => {
      console.log('active')
      var newlist = [...viewList]
      var newFilteList = newlist.filter(
        item => item.checked == false)

      setList(newFilteList)
    },

    handleAll: () => {
      console.log("all")
      setList(viewList)
    }
  }
  
  return (
    <>
      <section className="todoapp">
        <CurrentUserContext.Provider
          value={{ list, setList, viewList, setviewList, listFunctions }}>
          <Header CurrentUserContext={CurrentUserContext} addlist={addlist}></Header>
          <Edit CurrentUserContext={CurrentUserContext}></Edit>
          <AddDel CurrentUserContext={CurrentUserContext}></AddDel>
        </CurrentUserContext.Provider>
      </section>
      <Footnote></Footnote>
    </>
  )
}

export default App

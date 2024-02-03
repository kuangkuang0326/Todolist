import React, { useEffect, useState } from 'react'

export default function Addition2() {
    const [text, setText] = useState('')


    // list用以增删事件改变
    const [list, setList] = useState([])
    // viewlist 用以存储所有事件
    const [viewList, setviewList] = useState([])
    const [checked, setChecked] = useState(false)


    // 改变li标签内容
    const [isEditing, setEditing] = useState(false)     // 状态
    const [editedText, setEditedText] = useState("")      // 内容
    const [editId, setEditId] = useState("")      // id




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

    const Commit = (event) => {
        console.log("add", text)
        event.preventDefault();
        addlist(text)
        setText('')
    }


    const handleCheck = (index) => {
        var newlist = [...list]
        newlist[index].checked = !newlist[index].checked
        setviewList(newlist)
    }










    // 这里是增加 删除 查找
    const handleClear = () => {

        console.log("del")
        setviewList((prevViewList) => {
            const newFilterList = prevViewList.filter((item) => !item.checked);
            setList(newFilterList);
            return newFilterList
        })
    }

    const handleCompleted = () => {
        console.log('complete')
        var newlist = [...viewList]
        var newFilteList = newlist.filter(
            item => item.checked == true)

        setList(newFilteList)
    }

    const handleActive = () => {
        console.log('active')
        var newlist = [...viewList]
        var newFilteList = newlist.filter(
            item => item.checked == false)

        setList(newFilteList)
    }

    const handleAll = () => {
        console.log("all")
        setList(viewList)
    }
    const handleDel = (Id) => {
        console.log("delete")
        var newList = [...viewList]
        var newFilterList = newList.filter(item => item.id !== Id)
        setviewList(newFilterList)
        setList(newFilterList)
        // setviewList((prevViewList) => {
        //     const newFilterList = prevViewList.filter((item) => item.id !== Id);
        //     setList(newFilterList);
        //     return newFilterList
        // })
    }









    // 这里是改动
    const updatelist = (id, newtext) => {
        const updateNewList = viewList.map(item => {
            if (item.id == id) {
                return { ...item, text: newtext };
            }
            return item;
        })
        setviewList(updateNewList);
        setList(updateNewList)
    }

    const handleClick = (item) => {
        console.log('remend');
        setEditing(true);
        setEditId(item.id);
        setEditedText(item.text)
    }

    // 失去焦点后保存更新
    const handleBlur = (id) => {
        // setEditing(false);
        // 更新数组
        updatelist(id, editedText);
        setEditId('');
        setEditedText('')

    }

    

    return (
        <div>
            <section className="todoapp">
                <header className="header">

                    <h1>todos</h1>

                    <form onSubmit={Commit}>

                        <input className="new-todo"
                            placeholder="What needs to be done?"
                            autoFocus
                            value={text} onChange={(event) => {
                                setText(event.target.value)
                            }} />
                    </form>

                    {
                        list.map((item, index) =>
                            <li key={item.id} className='list-input' onDoubleClick={() => handleClick(item)} >

                                <div className='listinput-container1'>
                                    {/* <lable className="checkbox-lable"> */}
                                    {/* 谁能教教我圆的能点的复选框怎么写，为什么我的不能点!!!!!!!!!! */}
                                    <input type='checkbox' checked={item.checked} onChange={() => handleCheck(index)}>
                                    </input>
                                    {/* </lable> */}

                                    {editId == item.id ? (<input type='text' value={editedText} onChange={(e) => setEditedText(e.target.value)} onBlur={() => handleBlur(item.id)} className='changeinput' autoFocus />) :
                                        (<span style={{ textDecoration: item.checked ? "line-through" : "", color: item.checked ? "#777" : "" }} >
                                            {item.text}
                                        </span>)
                                    }
                                </div>
                                <button className='handleDel' onClick={() => handleDel(item.id)}>x</button>

                            </li>
                        )
                    }


                </header>



                <main className="main">
                    <div className="toggle-all-container">
                        <input className="toggle-all" type="checkbox" />
                        {/* <label className="toggle-all-label" htmlFor="toggle-all">Mark all as complete</label> */}
                    </div>
                    <ul className="todo-list"></ul>
                </main>


                <footer className="footer" style={{ display: viewList.length == 0 ? "none" : "" }}>
                    <span className="todo-count">{list.length}items left</span>
                    <ul nonce="filters" className='filters'>

                        <li><a href="#/" className="selected" onClick={handleAll}>All</a></li>


                        <li><a href="#/active" onClick={handleActive}>Active</a></li>


                        <li><a href="#/completed" onClick={handleCompleted}>Completed</a></li>

                    </ul>
                    <button className="clear-completed" onClick={handleClear}>Clear completed</button>
                </footer>



            </section>
            <footer className="info">
                <p>Double-click to edit a todo</p>
                <p>Created by the TodoMVC Team</p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </div>
    )
}

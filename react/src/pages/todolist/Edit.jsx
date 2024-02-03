import React, { useState, useContext } from 'react'

export default function footer2(props) {
    
    // 改变li标签内容
    // const [isEditing, setEditing] = useState(false)     // 状态
    const [editedText, setEditedText] = useState("")      // 内容
    const [editId, setEditId] = useState("")      // id
    let { CurrentUserContext } = props
    const { list, viewList,setviewList, setList } = useContext(CurrentUserContext)


    const handleCheck = (index) => {
        var newlist = [...list]
        newlist[index].checked = !newlist[index].checked
        setviewList(newlist)
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
        // setEditing(true);
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
                    {
                        list && list.map((item, index) =>
                            <li key={item.id} className='list-input' onDoubleClick={() => handleClick(item)} >

                                <div className='listinput-container1'>
                                    {/* <lable className="checkbox-lable"> */}
                                    {/* 谁能教教我圆的能点的复选框怎么写，为什么我的不能点！！！！ */}
                                    <input type='checkbox' checked={item.checked} onChange={() => handleCheck(index)}>
                                    </input>
                                    {/* </lable> */}

                                    {editId == item.id ? (<input type='text' value={editedText} onChange={(e) => setEditedText(e.target.value)}
                                        onBlur={() => handleBlur(item.id)} className='changeinput' autoFocus />) :
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
            </section>
        </div >
    )
}

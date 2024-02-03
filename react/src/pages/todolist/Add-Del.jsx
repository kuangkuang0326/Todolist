import React, { useContext } from 'react'

export default function Footer(prop) {
    const { CurrentUserContext } = prop
    const { list, setList, viewList, setviewList } = useContext(CurrentUserContext)

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

    return (
        <div>
            <section className="todoapp">
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

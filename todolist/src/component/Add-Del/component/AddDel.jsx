import { useContext } from 'react'


export default function AddDel(prop) {
    const { CurrentUserContext } = prop
    const { listFunctions, viewList, list } = useContext(CurrentUserContext)

    return (
        <>
            <footer className="footer" style={{ display: viewList.length == 0 ? "none" : "" }}>
                <span className="todo-count">{list.length}items left</span>
                <ul nonce="filters" className='filters'>

                    <li><a href="#/" className="selected" onClick={listFunctions.handleAll}>All</a></li>


                    <li><a href="#/active" onClick={listFunctions.handleActive}>Active</a></li>


                    <li><a href="#/completed" onClick={listFunctions.handleCompleted}>Completed</a></li>

                </ul>
                <button className="clear-completed" onClick={listFunctions.handleClear}>Clear completed</button>
            </footer>
        </>
    )
}

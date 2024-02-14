import { useContext } from 'react'

export default function Main(prop) {
    const { CurrentUserContext } = prop
    const { list, setList, setviewList } = useContext(CurrentUserContext)
    const handleTaggle = () => {
        console.log("toggle")
        const allChecked = list.every(item => item.checked == true)
        const newList = list.map((item) => {
            if (allChecked) {
                return { ...item, checked: false }
            }
            return { ...item, checked: true }
        })
        setList(newList)
        setviewList(newList)
    }
    return (
        <>
            <main className="main">
                <div className="toggle-all-container" onClick={handleTaggle}>
                    <input className="toggle-all" type="checkbox" />
                    <label className="toggle-all-label" htmlFor="toggle-all" >Mark all as complete</label>
                </div>
                <ul className="todo-list"></ul>
            </main>
        </>
    )
}

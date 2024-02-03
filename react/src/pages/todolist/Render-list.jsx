import React, { useContext, useState } from 'react'

export default function RenderList(prop) {

    const [text, setText] = useState('')
    const { Currentusercontext,addlist } = prop
    // const {list,setList,setviewList}=useContext(Currentusercontext)


    const Commit = (event) => {
        console.log("add", text)
        event.preventDefault();
        addlist(text)
        setText('')
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
                </header>
            </section>
        </div >
    )
}

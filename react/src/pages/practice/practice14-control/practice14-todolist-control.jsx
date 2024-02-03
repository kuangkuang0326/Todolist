import React, { Component } from 'react'

export default class practice9 extends Component {
  myRef = React.createRef()

  state = {
    list: [{
      id: 1, text: "aaa", checked: false
    },
    {
      id: 2, text: "bbb", checked: false
    },
    {
      id: 3, text: "ccc", checked: false
    }],
    text: "aaa",
    // decoration: !"line-through"
    // item.checked ? "line-through" : ""
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item, index) =>
              <li key={item.id}>
                <input type='checkbox' checked={item.checked} onChange={
                  () => this.handleCheck(index)
                }></input>
                <span style={{
                  textDecoration:
                    item.checked ? "line-through" : ""
                  // this.state.decoration 
                }}>{item.text}</span>
                <button
                // onClick={
                // this.setState({
                // decoration: !this.state.decoration
                // })
                // }
                >
                  complete
                </button>
                <button onClick={() => this.handleDelClick(index)}>
                  del
                </button>
              </li>

            )
          }
        </ul>
        <div>
          <input value={this.state.text} onChange={(event) => {
            this.setState({
              text: event.target.value
            })
          }}></input>
          <button onClick={this.handleClick2}>
            add2
          </button>
        </div>
      </div>
    )


  }

  handleClick2 = () => {
    console.log("add", this.state.text)

    var newlist = [...this.state.list]
    newlist.push({
      id: Math.random() * 1000000,
      text: this.state.text,
      checked: false
    })

    this.setState({
      list: newlist,
      text: ""

    })

  }

  handleDelClick = (index) => {
    console.log("del this", index)

    let newlist = this.state.list.concat()
    newlist.splice(index, 1)

    this.setState(
      { list: newlist }
    )
  }

  handleCheck = (index) => {
    var newlist = [...this.state.list]
    newlist[index].checked = !newlist[index].checked

    this.setState({
      list: newlist
    })

  }

}
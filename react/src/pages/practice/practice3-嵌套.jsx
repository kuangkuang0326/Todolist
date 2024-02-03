import React, { Children, Component } from "react"

class Child extends Component {
    render() {
        return <div>child</div>
    }
}
class Navabar extends Component {
    render() {
        return <div>Navabar
            <Child></Child>
            {/* 意为在navavar中再嵌套一个child组件 */}
        </div>
    }

}

function Sviper() {
    return <div>Sviper</div>
}

const Tabbar = () => {
    return <div>Tabbar</div>
}

export default class Practiceapp extends React.Component {
    render() {
        return (
            <div>
                {/* 在根组件中嵌套三个组件，要继续嵌套需写在相应组件各自内部，而不是写在这里 */}
                <Navabar></Navabar>

                <Sviper></Sviper>

                <Tabbar></Tabbar>

            </div>
        )
    }
}
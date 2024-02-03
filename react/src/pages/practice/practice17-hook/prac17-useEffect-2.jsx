// import React, { useEffect, useState } from 'react'

// export default function Prac17() {

//     const [name, setName] = useState("kuangkuang1")

//     useEffect(() => {
//         setName(name.substring(0, 1).toUpperCase() + name.substring(1))
//     }, [name])

//     // 把首字母变大写，
//     // 第一次执行一次，在name(依赖)更新后，也会再执行一次（计算属性，依赖的属性改变了，会自动执行一遍相关程序）

//     return (
//         <div>
//             app-{name}
//             <button onClick={() => {
//                 setName("kuangkuang2")
//             }}>click</button>
//         </div>
//     )
// }

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Prac17(){
    const [type,setType]=useState(1)
    return (
        <div>
        <ul>
            <li onClick={() => {
               setType(1)
            }}>正在热映</li>
            <li onClick={() => {
                setType(2)
            }}>即将上映</li>
        </ul>

        <FilmList type={type}></FilmList>
    </div>
    )
}



// export default class Prac17 extends Component {
//     state = {
//         type: 1
//     }
//     render() {
//         return (
//             <div>
//                 <ul>
//                     <li onClick={() => {
//                         this.setState({
//                             type: 1
//                         })
//                     }}>正在热映</li>
//                     <li onClick={() => {
//                         this.setState({
//                             type: 2
//                         })
//                     }}>即将上映</li>
//                 </ul>

//                 <FilmList type={this.state.type}></FilmList>
//             </div>
//         )
//     }
// }



function FilmList(props) {
    const [list, setList] = useState([])
    useEffect(() => {
        if (props.type === 1) {
            console.log("请求正在热映的数据")

            axios({
                url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7827897",
                headers: {
                    "X-Client-Info": '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "17059769054738555813298177", "bc": "110100" }',
                    "X-Host": "mall.film-ticket.film.list"
                }
            }).then(res => {
                console.log(res.data.data.films),
                    setList(res.data.data.films)
            })
        } else {
            console.log("请求即将上映的数据")
            axios({
                url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=408015",
                headers: {
                    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"17059769054738555813298177","bc":"110100"}',
                    "X-Host": "mall.film-ticket.film.list"
                }
            }).then(res => {
                console.log(res.data.data.films),
                    setList(res.data.data.films)
            })
        }
    }, [props.type])

    // useEffect的依赖到底写什么呢？在这里，第一次渲染后显示了正在热映的数据，但是点击后type属性改变却无法接收到，因而数组内为props.style,用于接收改变的属性值，以引起重新渲染


    return <div>
        {
            list.map(item =>
                <li key={item.filmId}>{item.name}</li>
            )
        }
    </div>
}












// class FilmList extends Component {
//     state = {
//         list: []
//     }

//     componentDidMount() {                                // 初始化生命周期，只执行一次
//         console.log(this.props.type)
//         if (this.props.type === 1) {
//             // 请求正在热映的数据
//             console.log("请求正在热映的数据")

//             axios({
//                 url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7827897",
//                 headers: {
//                     "X-Client-Info": '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "17059769054738555813298177", "bc": "110100" }',
//                     "X-Host": "mall.film-ticket.film.list"
//                 }
//             }).then(res => {
//                 console.log(res.data.data.films),
//                     this.setState({
//                         list: res.data.data.films
//                     })
//             })
//         } else {
//             // 请求即将上映的数据
//             console.log("请求即将上映的数据")
//             axios({
//                 url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=408015",
//                 headers: {
//                     "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"17059769054738555813298177","bc":"110100"}',
//                     "X-Host": "mall.film-ticket.film.list"
//                 }
//             }).then(res => {
//                 console.log(res.data.data.films),
//                     this.setState({
//                         list: res.data.data.films
//                     })
//             })
//         }
//     }
//     componentWillReceiveProps(props) {                 // 再次点击时传回最新的type属性，这里命名为props，然后执行这个函数
//         console.log(this.props.type)
//         if (props.type === 1) {
//             // 请求正在热映的数据
//             console.log("请求正在热映的数据")
//             axios({
//                 url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7827897",
//                 headers: {
//                     "X-Client-Info": '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "17059769054738555813298177", "bc": "110100" }',
//                     "X-Host": "mall.film-ticket.film.list"
//                 }
//             }).then(res => {
//                 console.log(res.data.data.films),
//                     this.setState({
//                         list: res.data.data.films
//                     })

//             })
//         } else {
//             // 请求即将上映的数据
//             console.log("请求即将上映的数据")
//             axios({
//                 url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=408015",
//                 headers: {
//                     "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"17059769054738555813298177","bc":"110100"}',
//                     "X-Host": "mall.film-ticket.film.list"
//                 }
//             }).then(res => {
//                 console.log(res.data.data.films),
//                     this.setState({
//                         list: res.data.data.films
//                     })
//             })
//         }
//     }

//     render() {
//         return <div>
//             {
//                 this.state.list.map(item =>
//                     <li key={item.filmId}>{item.name}</li>
//                 )
//             }                                           {/* 状体是不能传的，要传只能传属性哦 */}
//         </div>
//     }
// }

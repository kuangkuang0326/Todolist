// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// // import ""

// const GlobalContext = React.createContext()
// // 创建context对象

// export default Prac17(){
//     const [FilmList, setFilmList] = useState([])
//     const [info, setInfo] = useState("")
//     useEffect(() => {
//         axios.get(
//             url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5925891";
//         Headers: {
//             "X-Client-Info": "{"a":"3000","ch":"1002","v":"5.2.1","e":"17059769054738555813298177","bc":"110100"}";
//             "X-Host": "mall.film-ticket.film.list"
//         }).then(res => {
//             console.log(res.data.data.films)
//             setFilmList(res.data.data.films)
//         })
// }, [])
// return (
//     <Globalcontext.Provider value={{
//         call: '打电话',
//         ses: "短信",
//         info: info,
//         changeInfo: (value) => {
//             setInfo(value)
//         }
//     }}>
//         <div>
//             {
//                 FilmList.map(item =>
//                     <filmItem key={item.filmId} {...item}></filmItem>)
//             }
//             <FilmDetail></FilmDetail>
//         </div>
//     </Globalcontext.Provider>
// )
// }

// function FilmItem(props) {
//     let { name, poster, grada, synopsis } = props
//     const context = useContext(GlobalContext)

//     return (
//         <Globalcontext.Consumer>
//             {
//                 (value) => {
//                     console.log(value)

//                     return <div className="filmitem" onClick={() => {
//                         console.log(synopsis),
//                             value.changeInfo(synopsis)
//                     }} >
//                         <img src={poster} alt="name"></img>
//                         <h4>{name}</h4>
//                         <div>观众评分:{grade}</div>
//                     </div>
//                 }
//             }
//         </Globalcontext.Consumer>
//     )
// }

// function FilmDetail() {
//     return (
//         <GlobalContext.Consumer>
//             {
//                 (value) => <div className="filmdetail">detail-{value.info}</div>
//             }
//         </GlobalContext.Consumer>
//     )
// }









// import React, { useContext } from 'react';

// // 1. 创建 Context
// const ThemeContext = React.createContext('light');

// function App() {
//     return (
//         // 2. 使用 Context Provider
//         <ThemeContext.Provider value="dark">
//             <Toolbar />
//         </ThemeContext.Provider>
//     );
// }

// function Toolbar() {
//     return (
//         <div>
//             <ThemeButton />
//         </div>
//     );
// }

// function ThemeButton() {
//     // 3. 在组件中访问 Context
//     const theme = useContext(ThemeContext);
//     return <button>{theme} theme</button>;
// }

// export default App;









// 用usecontext动态传状态
import React, { useContext, useState } from 'react';

// 1. 创建 Context
const CurrentUserContext = React.createContext('light');

function App() {
    const [currentUser, setCurrentUser] = useState(null)
    return (
        // 2. 使用 Context Provider
        <CurrentUserContext.Provider
            value={{
                currentUser,
                setCurrentUser
            }}
        >
            <Toolbar />
        </CurrentUserContext.Provider>
    );
}

function Toolbar() {
    return (
        <div>
            <LoginButton />
        </div>
    );
}

function LoginButton() {
    const {
        currentUser,
        setCurrentUser
    } = useContext(CurrentUserContext);

    if (currentUser !== null) {
        return <p>You logged in as {currentUser.name}.</p>;
    }

    return (
        <button onClick={() => {
            setCurrentUser({ name: 'Advika' })
        }}>Log in as Weijunext</button>
    );
}

export default App;

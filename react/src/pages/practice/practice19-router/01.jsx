import React from 'react'
import { HashRouter, Redirect, Route } from 'react-router-dom/cjs/react-router-dom'

export default function Prac19() {
    return (
        <div>
            <HashRouter>
                <switch>
                    {/* 这个在根组件中，为一级路由 */}
                    <Route path="/films" component={Films}></Route>
                    <Route path="/cinemas" component={cinemas}></Route>
                    <Route path="/center" component={center}></Route>

                    {/* <Redirect from="/" to="/films"></Redirect> */}
                    {/* 模糊匹配，没有匹配的网站就跳到films页面 */}
                    <Redirect from="/" to="/films" exact></Redirect>
                    {/* 此时为精确匹配，只有 / 才能跳到films，其他的地址就不会自动跳到films */}


                    <Route component={NotFound}></Route>
                    {/* 前面都不匹配时，就跳到notfound组件（页面） */}
                </switch>
                {/* 每匹配一次就跳出switch，这样刷新后就不会再次跳到films页面，而是停留在原有页面  */}
                
                
                <switch>                                      {/* 这个其实应该放在films组件中，为嵌套路由 */}
                    <Route path="/films/nowplaying" component={nowplaying}></Route>
                    <Route path="/films/comingsoon" component={comingsoon}></Route>

                    <Redirect from="/films" to="/films/nowplaying"></Redirect>
                </switch>

            </HashRouter>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function prac17() {

    const [cinemaList, setCinemaList] = useState([]);

    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4493841",
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "17059769054738555813298177", "bc": "110100" }',
                'X-Host': 'mall.film-ticket.cinema.list'
            },
            method: 'get'
        }).then(res => {
            console.log(res.data)
            setCinemaList(res.data.data.cinemas)
        }).catch(err => {
            console.log(err)
        });
    }, [])
    // 1.useeffect 写法； 传空数组，说明不依赖，只会渲染一次

    // const [list, setList] = useState([])
    return (
        <div>
            {
                cinemaList.map(                                       // 过滤之后重新渲染地址
                    item => (<dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dd>{item.address}</dd>
                    </dl>)
                )
            }

        </div>
    )
}

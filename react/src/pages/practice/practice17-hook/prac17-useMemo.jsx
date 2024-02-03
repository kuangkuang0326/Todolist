import React, { Component, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
// 利用usememo改todo受控
// 拿到函数返回结果，不会返回函数

export default function Prac17Cinema() {
    const [text, setText] = useState("a");
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
            setCinemaList(res.data.data.Cinemas)
        }).catch(err => {
            console.log(err)
        });
    }, [])

    var getCinemaList = useMemo(() => {
        return cinemaList ? cinemaList.filter(
            item => item.name.toUpperCase().includes(
                text.toUpperCase()
            ) || item.address.toUpperCase().includes(
                text.toUpperCase()
            )):[]
    }, [cinemaList, text])

    return (
        <div>
            <div>
                <input value={text} onChange={(event) => {
                    setText(event.target.value)
                }}></input>
                {
                    getCinemaList.map(
                        item => (<dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>)
                    )
                }
            </div>
        </div>
    )

}





// cinemaList ? cinemaList.filter( item => item.name.toUpperCase().includes(text.toUpperCase()) || item.address.toUpperCase().includes(text.toUpperCase()) ) : []; }, [cinemaList, text])
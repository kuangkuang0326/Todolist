import React, { Component } from 'react'
import axios from 'axios'

export default class practice12Cinema extends Component {

    constructor() {
        super()
        this.state = {
            cinemaList: [],
            //   bakcinemaList: [] 
            text: 'a'


        }

        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4493841",
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "17059769054738555813298177", "bc": "110100" }',
                'X-Host': 'mall.film-ticket.cinema.list'
            },
            method: 'get'
        }).then(res => {
            console.log(res.data);
            this.setState({
                cinemaList: res.data.data.cinemas,
                // bakcinemaList: res.data.data.cinemas
            })
        }).catch(err => {
            console.log(err)
        });



    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.text} onChange={(event) => {
                        // console.log(event.target.value)                               // input和state相互传状态、改变状态，实现受控
                        this.setState({
                            text: event.target.value
                        })
                    }}></input>
                    {
                        this.getCinemaList().map(                                       // 过滤之后重新渲染地址
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

    getCinemaList() {                                                                  // 过滤函数
        return this.state.cinemaList.filter(
            item => item.name.toUpperCase().includes(
                this.state.text.toUpperCase()) || item.address.toUpperCase().includes(this.state.text.toUpperCase()))
    }

    //   handleInput = (event) => {                                
    //     console.log("input", event.target.value)

    //     var newlist = this.state.bakcinemaList.filter(          
    //       item => item.name.toUpperCase().includes(
    //         event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value.toUpperCase()))              

    //     this.setState({                                             
    //       cinemaList: newlist
    //     })

    //   }
    
}

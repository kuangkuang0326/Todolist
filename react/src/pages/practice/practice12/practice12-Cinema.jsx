import React, { Component } from 'react'
import axios from 'axios'

export default class practice12Cinema extends Component {

  constructor() {
    super()
    this.state = {
      cinemaList: [],
      bakcinemaList: []                                            // 备份版本的数据

    }
    // axios 第三方的库，专门用于请求数据
    // axios.get(
    //   "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4493841"
    // ).then(res => { console.log(res) }
    // ).catch(err => { console.log(err) })

    axios({                                             // 加上请求头
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
        bakcinemaList: res.data.data.cinemas
      })
    }).catch(err => {
      console.log(err)
    });



  }

  render() {
    return (
      <div>
        <div>
          {             /* 布局一下下 */}
          <input onInput={this.handleInput}></input>                {/* 搜索框实现模糊查询 */}
          {
            this.state.cinemaList.map(
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

  handleInput = (event) => {                                 // 先拿到标签，再拿到里面的值
    console.log("input", event.target.value)

    var newlist = this.state.bakcinemaList.filter(            // 对数据进行filter过滤
      item => item.name.toUpperCase().includes(
        event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value.toUpperCase()))              // 统一转换成大写再进行对比，将过滤出的带给定值的数据存在newlist

    // console.log(newlist) 先打印看能不能获取再更新


    this.setState({                                              // 更新一下数据库
      cinemaList: newlist
    })

  }
}



// filter
// var arry=['aaa','bbb','ccc']

// var newarry=arr.filter(item=>item.include("a"))
// console.log(newarry)
import React, { Component } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination, pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default class Prac18 extends Component {
    state = {
        list: ['111', '222', '333']
    }
    componentDidMount() {
        new Swiper(".Swiper")
    }

    const swiper = new Swiper(".swiper", {
        modules: [Navigation, Pagination],
        ...
    })

    render() {
        return (
            // dom结构
            <div>

                <div className="swiper">
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map(item =>
                                <div className="swiper-slide" key={item}>{item}</div>)

                        }
                    </div>
                </div>
                {/* 
                    如果需要分页器
                    <div className="swiper-pagination"></div>

                    如果需要导航按钮
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                    如果需要滚动条
                    <div className="swiper-scrollbar"></div> */}
            </div>
        )
    }
}

import React, { Component } from 'react'
import NavabarPropTypes from 'prop-types'
// console.log(NavabarPropTypes)                            // 先打印看看方法

export default class Navabar extends Component {
 
    static propTypes = {                               // 类属性转到对象内
        title: NavabarPropTypes.string,                //  属性验证
        leftbutton: NavabarPropTypes.bool,
        rightbutton: NavabarPropTypes.bool
    }

    static defaultProps = {                             // 默认属性
        leftbutton: true,
        rightbutton: true
    }

    render() {
        let title = this.props.title
        // let leftbutton = this.props.leftbutton
        // let rightbutton = this.props.rightbutton               
        // 解构赋值
        return (
            <div>
                {this.props.leftbutton === true && <button>返回</button>}
                navabar-{title}
                {this.props.rightbutton === true && <button>菜单</button>}
            </div>
        )
    }


}


// 做属性验证：1.类属性name.propTypes   2.引入'prop-types'
// Navabar.propTypes = {
//     title: NavabarPropTypes.string,
//     leftbutton: NavabarPropTypes.bool,
//     rightbutton: NavabarPropTypes.bool
// }





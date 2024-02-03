##### 状态

状态就是组件描述某种显示情况的数据，<b>由组件自己维护</b>，使用状态的目的是为了在不同状态下是组件的显示不同（自我管理）

this.state是纯js对象，更改data数据时会触发getter和setter，但是React种没有这样的处理，如果直接更改，react是无法得知的，所以需要实用特殊的更改状态方法stateState

两种声明方式

##### 列表渲染

#####原生js map循环与映射、jion

```Javascript
var list=['aa','bb','ccccc']
var newlist=list.map(item=>`<li>${item}</li>`)
console.log(newlist.join(""))
```

<li>map 函数是数组对象的一个方法，它用于对数组的每个元素执行指定的函数，并返回一个新的数组，其中包含每个函数的返回值。
<li>使用 map 遍历了 list 数组的每个元素，并将每个元素包装在 li 标签中。这样，newlist 成为一个新数组，包含了每个元素被 li 包装后的结果。
<li>模板字符串是一种字符串的表示方法，使用反引号 ` 包裹，可以在字符串中嵌入表达式。${item} 是一个模板字符串中的表达式，表示将数组元素 item 的值插入到字符串中。
<li>newlist.join("") 使用数组的 join 方法将数组的元素连接成一个字符串。在这里，使用空字符串 "" 作为参数，表示没有分隔符，直接连接所有元素。

##### todolist增删

传参两个方法

##### 条件渲染

在页面中，让一个页面显示还是删除

##### movie-case

{ }内可以写表达式 函数、算式

利用swith循环显示标签

```Javascript
solve() {                                               
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
        }
    }
```

##### 数据请求

引入第三方库axios
安装： npm i axios/cnpm i --save axios
用法： 

```Jacascript
axios.get("请求地址").then(res=>{}).catch(err=>{console.log(err)})
```

##### 属性

props是正常是外部传入的，组件内部也可以通过一些方式来初始化的设置，属性自己不能被组件更改，<b>但是可以通过父组件主动重新渲染的方式传入新的props</b>

属性是描述性质的、特点的，组件自己不能随意更改

一个组件，不同页面需要显示不同的值，就需要赋给它不同的属性（状态不能通过别人来改变，状态是自己的）

在组件上通key=vlue写属性，通过this.props获取

###### 对象属性与类属性

```Javascript
// 对象属性
class A ={
    a=1
}
// 类属性
A.a=100
// 访问对象属性
console.log(new A().a)
// 访问类属性
console.log(A.a)
// 类属性移到对象中 此时访问方法不变
class A {
    a=1
    static a=100
}

```

###### 属性验证

写法一：
1.类属性name.propTypes   2.引入'prop-types'

```Javascript

import NavabarPropTypes from 'prop-types'

Navabar.propTypes = {
    title: 验证是不是字符串的方法,
    leftbutton: 验证是不是bool的方法,
    rightbutton: 验证是不是bool的方法
}
```

###### 属性vs状态

<li>属性在组件内部是只读的，它由父组件获取，从父组件修改，它可以设置子组件组件初始值也可以修改子组件的值，状态不可以
<li>属性不在组件内部修改，而状态在组件内部修改
<li>属性和状态都可以在内部设置默认值

state用于组件保存、控制、修改自己的可变状态，它是一个只能被组件自身控制的数据源。它可以通过this.setstate方法进行更新，并导致组件重新渲染。无状态组件可以提高复用性。

props用于该组件的父组件传入参数来配置该组件，它是外部传进来的配置参数，组件自己无法控制与修改


##### 组件通信方式

<b>父子组件</b>
<li>传递数据与传递方法
<li>ref标记：父组件拿到子组件的标记，从而调用子组件的方法；在父组件中清除子组件的input输入框的value值。<b>this.refs.form.reset()</b>

#### react hook

1.高阶组件的复用
2.生命周期过于复杂
3.

<b>useState</b>
声明一个状态变量，返回一个数组，第一个元素是状态变量，第二个函数是改变状态变量的函数

```Javascript
const [state,setstate]=useState(initialState)
```

<b>useEffect</b>(处理副作用)和<b>useLayoutEffect</b>(同步处理副作用)function compoment 不存在生命周期
<b>管理异步逻辑，模拟类组件的生命周期函数</b>可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合

Effect Hook 可以让你在函数组件中执行副作用操作，这里提到副作用，什么是副作用呢，就是除了状态相关的逻辑，比如网络请求，监听事件，查找 dom

参数一：在函数内部放置要执行的操作
参数二：可选参，依赖数组；当时空数组时，组件渲染完毕之后执行<b>一次</b>


```Javascript
useEffect(()=>{
    // effect 实现副作用操作逻辑
    return ()=>{
        // cleanup 清除副作用
    }
},[依赖的状态，空数组表示不依赖])
```

<li>useEffect可以调用多次
<li>若不写第二个参数，任意状态更新都会执行useEffect

不要对Dependencies撒谎，如果明明使用了某个变量，却没有声明在依赖中，等于向React撒了谎，那么，当依赖改变时，useEffect也不会再次执行，还会有警告


<b>useCallBack</b>记忆函数，缓存函数
防止组件重新渲染，导致方法被重建，起到缓存作用，只有第二个参数（就是依赖的数组）变化了，才会重新声明一次

```Javascript
var handleClick=useCallback(()=>{
    console.log(name)
    },[name])
<button onClick={ ()=>handleClick() }>click</button>

```

<b>useMemo</b>记忆组件，缓存数据
usecallback的功能完全可以由usememo取代，想要通过使用usememo返回一个记忆函数也是可以的

```Javascript
usecallback(fn,inputs) is equivalent to useMemo( ()=> fn, inputs)
```

<li>usecallback不会执行第一个参数，而是将它返回给你，而usememo会执行第一个函数并将函数执行结果返回给你
所以，usecallback常用于记忆事件函数并传递给子组件使用，而usememo更适合经过函数计算得到一个确定的值，比如记忆组件。

<b>useRef</b>(保存引用值)
一样的，放在原生dom节点上就拿到节点，放在组件上就引用组件
保存临时变量/在组件和dom中实现组件通信等

1.获取子组件的实例(只有类组件可用)
2.在函数组件中的一个全局变量，不会因为重复 render 重复申明， 类似于类组件的 this.xxx

```Javascript
const myswipe r= useRef(null);
<Swiper ref={myswiper}/>
```

如何保存一个变量？
usestate/useref---闭包在支撑

<b>useContext</b>
通过context实现跨层级共享状态：创建context；使用context provider；在组件中访问context
1.基础用法
2.动态context的值，基于usestate去更新状态，更新后的值会实时反映到context组件中
3.粒度化context；使用多个context提供者；使用uesmemo和usecallback优化，减少无意义更新

<b>useReducer</b>
对于复杂的state操作逻辑，嵌套的state的对象，推荐使用useReducer。 useReducer可以让我们将what和how分开

第一个参数：reducer函数第二个参数：初始化的state。返回值为最新的state和dispatch函数（用来触发reducer函数，计算对应的state）

```Javascript
// 官方 useReducer Demo
    // 第一个参数：应用的初始化
    const initialState = {count: 0};

    // 第二个参数：state的reducer处理函数
    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
              return {count: state.count + 1};
            case 'decrement':
               return {count: state.count - 1};
            default:
                throw new Error();
        }
    }

    function Counter() {
        // 返回值：最新的state和dispatch函数
        const [state, dispatch] = useReducer(reducer, initialState);
        // const {count:0} = state
        return (
            <>
                // useReducer会根据dispatch的action，返回最终的state，并触发rerender
                Count: {state.count}
                // dispatch 用来接收一个 action参数「reducer中的action」，用来触发reducer函数，更新最新的状态
                <button onClick={() => dispatch({type: 'increment'})}>+</button>
                <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            </>
        );
    }
```
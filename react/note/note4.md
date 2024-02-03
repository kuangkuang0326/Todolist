##### 生命周期

<li>componentWillUnmount：在删除组件前进行清理操作，比如计时器和事件监听器
<b>初始化阶段</b>
<li>componentDidmount：成功渲染完成真实dom之后触发，可修改dom
<li>componentWillMount:render之前最后一次修改状态的机会

```Javascript
shouldComponentUpdate(nextProps,nextState){
    if (JSON.stringify(this.state)!==JSON.stringify(nextState)){
        // 将对象转为字符串
        return true
    }
    return false 
}
```


#### 路由
1.一级路由和多级路由

```Javascript
<Route path="/center" component={center}></Route>
```

2.路由重定向

```Javascript
<Route path='/' element={<Navigate to='/about '/>}></Route>
{/* 此时为精确匹配，只有 / 才能跳到films，其他的地址就不会自动跳到films */}
```

3.嵌套路由




##### 路由的使用步骤

在组件中导入对应路由链接组件，并设置路由链接
在组件中导入 Route 渲染组件，注册路由
在 index.js 中导入路由组件，在 <App> 的最外侧包裹一个 <BrowserRouter> 或 <HashRouter>

<BrowserRouter> 表示 history 模式的路由
<HashRouter> 表示 Hash 模式的路由


<b>向路由组件传递params参数</b>
<li> 传递 params 参数，在路径后面用 / 进行拼接</li>
<li>在路由表中定义接收路由参数
<li>对应组件使用 useParams() hooks 接收参数

### State组成：

>DomainData：服务器端的数据，比如：获取用户的信息，商品列表等
>
>UI State：决定当前UI展示的状态，比如：弹窗的显示隐藏，受控组件等
>
>App State：App级别的状态，比如：是否请求loading，当前路由信息等可能被多个组件使用到的状态

### Action：

>Action本质上是一个JavaScript普通对象
>
>Action对象内部必须有一个type属性来表示要执行的操作
>
>除了type字段之外，action的结构可以随意定义

```js
//action
{
	type: '字符串常量',
	info: { ... },
	isLoading: true,
	....
}
```



### Reducer：

>Reducer本质上是一个函数，它用来响应发送过来的actions，然后经过处理，把state发送给Store
>
>注意：在Reducer函数中，需要return返回值，这样才能收到数据
>
>函数接收两个参数，第一个是初始化的state，第二个参数是action

```js
const initState = {...}
rootReducer = ( state = initState, action) => { ... return {...}}
```



### Store：

> Store就是把action和reducer联系到一起的对象
>
> 维持应用的state
>
> 提供getState( )方法获取state
>
> 提供dispatch( )方法发送action
>
> 通过subscribe( )来注册监听
>
> 通过subscribe( )来注销监听

```js
import { createStore } from "redux";
const store = createStore(传递reducer);
```


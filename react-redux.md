## Redux：

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



## React-redux:

### Provider：

> 这个组件可以使整个app都能获取到store中的数据
>
> Provider包裹在根组件最外层，使所有组件都能拿到state
>
> Provide接收store作为props，然后通过context往下传递，这样react中任何组件都可以获取到store
>
> 

### connect：

> 这个方法使组件跟store进行关联
>
> Provider内部组件如果想使用到state中的数据，就必须要connect进行一层包裹封装，换一句话说就是要被connect加强
>
> connect就是方便我们组件获取到store中的state

### react- redux基本使用

#### 1、安装依赖：

```sh
yarn add react-redux redux
```

#### 2、利用redux来构建store

```js
import { createStore } from "redux";
import {  reducer } from "@/reducer";
export default createStore(reducer);
```

#### 3、connect的使用

> 导入connect方法
>
> ```jsx
> import { connect } from "react-redux"
> ```
>
> 调用connect方法
>
> ```jsx
> connect(...)(Component)
> ```
>
> connect方法会有一个返回值，而这个返回值就是加强后的组件
>
> | 参数名                                 | 类型     | 说明                                                         |
> | -------------------------------------- | -------- | ------------------------------------------------------------ |
> | mapStateToProps(state, ownProps)       | Function | 这个函数允许我们将store中的数据绑定到组件上：state：redux中的store；ownProps：自己的props |
> | mapDispatchToProps(dispatch, ownProps) | function | 将action作为props绑定到我们的函数中：dispatch:就是store.dispatch( )；ownProps:自己的props |
> |                                        |          |                                                              |

#### 4、利用connect方法让我们组件与store关联起来

>在组件 ComA和ComB分别导入connect方法
>
>```js
>import { connect } from "react-redux";
>```
>
>利用connect方法来对我们的组件进行加强，并且导出
>
>```js
>export default connect(mapStateToPrps, mapDispatchToProps)(Component);
>```
>
>组件ComA属于发送方，所以要实现第二个参数
>
>组件ComB属于接收方，所以要实现第一个参数

#### 5、ComA发送action

> 1、导入connect
>
> 2、利用connect对组件进行加强，connect(要接收数组的函数，要发送action的函数)(要加强的组件)
>
> 3、构建一个函数mapDispatchToProps(dispatch)：dispatch用来发送action的
>
> 4、在这个函数中可以返回一个对象：key：方法名；value：调用dispatch发送action
>
> 5、在组件内部可以通过this.props拿到这个方法

#### 6、ComB接收state

>1、导入connect
>
>2、利用connect对组件进行加强，connect(要接收数组的函数，要发送action的函数)(要加强的组件)
>
>3、ComB属于接收方，需要实现connect的第一个参数
>
>4、mapStateToProps里面的一个参数就是我们关心的state
>
>5、把这个state进行return进行return才能在组件内部获取到最新的数据

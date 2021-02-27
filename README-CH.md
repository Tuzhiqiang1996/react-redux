## redux 使用

[连接 1](https://blog.csdn.net/qq_28483283/article/details/108317680?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-3&spm=1001.2101.3001.4242)
[连接 2](https://www.jianshu.com/p/794f5aabbdc6)
[连接 3](https://zhuanlan.zhihu.com/p/62417038)

> redux 的三大核心：

```

action：action可以说是一个动作，用来描述将要触发的事件。

state：单一数据源，用来存储我们的数据。

reducer：通过触发的action事件来改变state的值。



```

> react-redux 中提供两个方法：

```

import { provider, connect } from 'react-redux';

provider是一个组件，作用是把store放到顶层容器组件上，在通过顶层容器传递到子组件上，
connect 为组件提供数据和变更方法，即connect将所需要的数据和方法和组件绑定
```

## redux 的使用步骤

```js
1. 在store/index中
     创建store来存储state值

     例如：
     import { createStore } from "redux"

    function loginReducer(state="登录", action){//创建reducer并赋予state默认值
    switch(action.type){
        case "nologin":
            return "登录"
        case "nowlogin":
            return "登录中...."
        case "haslogin":
            return "已登录"
        case "logout" :
            return "退出登录"
        default :
            return state
        }
    }
    const store = createStore(loginReducer)//创建store
    export default store;

3.在组件中使用
 引入store
  componentDidMount() {
    //订阅(subscribe)状态变更
    // PS:允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数,如state一旦发生改变，则强制刷新页面
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

 获取值 store.getState()
 改变值 store.dispatch({ type: "action.type值" })

```

## react-redux

```js
1. 在store/index中
     创建store来存储state值

     例如：
     import { createStore } from "redux"

    function loginReducer(state="登录", action){//创建reducer并赋予state默认值
    switch(action.type){
        case "nologin":
            return "登录"
        case "nowlogin":
            return "登录中...."
        case "haslogin":
            return "已登录"
        case "logout" :
            return "退出登录"
        default :
            return state
        }
    }
    const store = createStore(loginReducer)//创建store
    export default store;

2.在App中
    import { Provider } from "react-redux"; //引入Provider,是一个顶级组件，隔代传值
    将根组件包裹
        <Provider store={store}>{/*将store传下去*/}
        <Index />
         </Provider>

3.在组件中使用
import React, { Component } from 'react'
import {connect} from 'react-redux'
//https://www.jianshu.com/p/794f5aabbdc6
//https://zhuanlan.zhihu.com/p/62417038
 class reactredux extends Component {
    render() {
        const {nowlogin,logout,haslogin,data}=this.props

        return (
            <div>
     <p>
          <span>获取store中的state</span> <span>{data}</span>
        </p>
        <button onClick={nowlogin}>登录中....</button>
        <button onClick={logout}>已登录....</button>
        <button onClick={haslogint}>退出登录....</button>
            </div>
        )
    }
}


const stateToProps = state => {
    // store里的值, 这里是读取store的值给当前组件的props里
    // console.log(state)
    return {
      data: state
    }
  }

  // 改变store的数据
  const dispatchToProps = dispatch => {
    // changeNowData、changeNowName会加在当前的props里，然后diapatch去改变store的数据
    return {
        nowlogin(e) {
        dispatch({ type: "nowlogin" })
      },
      haslogin(e) {
        dispatch({ type: "haslogin" })
      },
      logout(e) {
        dispatch({ type: "logout" })
      }
    }
  }

export default connect(stateToProps, dispatchToProps)(reactredux)

```

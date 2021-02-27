import React, { Component } from 'react'
import {connect} from 'react-redux'
//https://www.jianshu.com/p/794f5aabbdc6
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
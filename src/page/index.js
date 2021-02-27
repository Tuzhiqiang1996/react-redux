import React, { Component } from "react";
import store from "../store/index";
  class index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
    //订阅(subscribe)状态变更
    // PS:允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数,如state一旦发生改变，则强制刷新页面
    store.subscribe(() => {
      this.forceUpdate();
    });
  }
  loging = () => {
    store.dispatch({ type: "nowlogin" });
  };
  logs = () => {
    store.dispatch({ type: "haslogin" });
  };
  logout = () => {
    store.dispatch({ type: "logout" });
  };
  render() {
    return (
      <div>
        <p>
          <span>获取store中的state</span> <span>{store.getState()}</span>
        </p>
        <button onClick={this.loging}>登录中....</button>
        <button onClick={this.logs}>已登录....</button>
        <button onClick={this.logout}>退出登录....</button>
      </div>
    );
  }
}
export default index;

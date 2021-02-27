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

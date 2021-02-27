import "./App.css";
import Index from "./component";
import store from "./store/index";
import { Provider } from "react-redux"; //引入Provider,是一个顶级组件，隔代传值
function App() {
  return (

    <div className="App">
        <Provider store={store}>{/*将store传下去*/}
          <Index />
       </Provider>

        {/* <Index /> */}
    </div>
  );
}

export default App;

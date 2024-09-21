import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routers from "./routes/Routers";

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;

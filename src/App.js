import "./App.css";
import MovieContent from "./pages/MovieContent";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <MovieContent />
    </Provider>
  );
}

export default App;

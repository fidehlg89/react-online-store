import store from "./../redux/store";
import { Provider } from "react-redux";
import AppRouter from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;

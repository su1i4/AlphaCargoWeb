import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/style.sass";
import ModalManagerProvider from "./providers/ModalManagerProvider";
import { Provider } from "react-redux";
import { store } from "./store/store";
//hello my name is sulaiman

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ModalManagerProvider>
      <App />
    </ModalManagerProvider>
  </Provider>
);

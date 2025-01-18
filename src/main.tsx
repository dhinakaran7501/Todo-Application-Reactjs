import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <App />
      <Toaster
        position="bottom-right"
        containerStyle={{
          top: 20,
          left: 20,
          bottom: 60,
          right: 20,
        }}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </Provider>
  </>
);

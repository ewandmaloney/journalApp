import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import JournalApp from "./JournalApp.tsx";
import { BrowserRouter } from "react-router-dom";
import AppTheme from "./theme/AppTheme.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <JournalApp />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Index from "./pages/index";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="*"
          element={<Index />}
        />
      </Routes>
    </Provider>
  );
}

export default App;

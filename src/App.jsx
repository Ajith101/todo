import React from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import FormContext from "./components/FormContext";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <FormContext>
          <Header />
          <MainPage />
        </FormContext>
      </Provider>
    </>
  );
};

export default App;

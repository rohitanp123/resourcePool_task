import React from 'react';
import MainApp from './mainApp';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";
import "./assets/index.css"

const App = () => {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App;
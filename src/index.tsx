import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from "./serviceWorker";

import './index.css'

import App from './App'
import { StoreContext } from 'redux-react-hook'
import { store } from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <Provider store={store}>
        <App />
      </Provider>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();

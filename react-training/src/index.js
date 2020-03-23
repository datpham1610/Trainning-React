import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import './css/bootstrap.min.css'
import './css/styles.css'
import * as serviceWorker from "./serviceWorker";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import countReducer from './reducers'
import Nav from './components/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

let store = createStore(countReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav/>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

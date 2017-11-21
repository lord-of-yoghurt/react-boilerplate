// React dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// ReactRouter dependencies and custom history
import AppRouter, { history } from './routers/AppRouter';

// react-redux dependencies
import { Provider } from 'react-redux';

// redux imports
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';

// style imports
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// db connection
import { firebase } from './firebase/firebase';

// component imports
import LoadingPage from './components/LoadingPage';
import Dashboard from './components/Dashboard';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById('app'));
//     hasRendered = true;
//   }
// };

ReactDOM.render(<Dashboard />, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
//   // user logged in
//   if (user) {
//     // do something
//   // user logged out
//   } else {
//     // do something else
//   }
// });

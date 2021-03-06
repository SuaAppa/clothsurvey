import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import './assets/css/index.css';
import Login from './login';
import SurveyInfo from './surveyInfo';
import Question from './question';
import Question2 from './question2';
import Question3 from './question3';
import Question4 from './question4';
import TopNav from './partials/topNav';
import { store } from './store/store';

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/surveyinfo">
          <TopNav />
          <SurveyInfo />
        </Route>
        <Route path="/question">
          <TopNav />
          <Question />
        </Route>
        <Route path="/question2">
          <TopNav />
          <Question2 />
        </Route>
        <Route path="/question3">
          <TopNav />
          <Question3 />
        </Route>
        <Route path="/question4">
          <TopNav />
          <Question4 />
        </Route>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

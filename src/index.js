import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import AppReducer from './reducers'
import {editName, incrementScore, moveLeft} from './actions'

let store = createStore(AppReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();

store.dispatch(editName('Ivaylo Donchev'))
store.dispatch(incrementScore())

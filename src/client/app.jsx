import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import dogReducer from './reducers/dog-reducer';
import BarkMessage from './containers/bark-message';
import BarkButton from './containers/bark-button';

const store = createStore(combineReducers({
  dog: dogReducer,
}));

ReactDOM.render(
  <div>
    <label htmlFor="slide-box">Education</label>
    <input type="checkbox" id="slide-box"></input>
    <div className="hidden-box"> University of Washington </div>
  </div>
  , document.querySelector('.app')
);
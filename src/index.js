import React from 'react';
import { render } from 'react-dom';
import {Routes} from './routes'
import appReducer from './reducers/reducer';
import  {createStore}  from 'redux';
import initial from './initialState.json';
import { Provider } from 'react-redux'


const store = createStore(appReducer, initial);
console.log(store.getState());

store.subscribe(()=>{
    console.log(`store state : ${store.getState()}`)
});

render(
   <Provider store={store}>
       <Routes/>
   </Provider>,
    document.getElementById('react-container')
);

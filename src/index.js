import React from 'react';
import { render } from 'react-dom';
import {Routes} from './routes'
import { Provider } from 'react-redux';
import store from './store'; 


console.log(store.getState());

window.store = store;

store.subscribe(()=>{
    console.log('store state :');
    console.log(store.getState());
});

render(
   <Provider store={store}>
       <Routes/>
   </Provider>,
    document.getElementById('react-container')
);

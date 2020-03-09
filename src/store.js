import {createStore} from 'redux';
import appReducer from './reducers/reducer';
import initial from './initialState.json';


export default createStore(appReducer, initial);
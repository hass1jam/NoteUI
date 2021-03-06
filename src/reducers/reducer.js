import React from 'react'
import { combineReducers } from 'redux';
import C from '../Constant'


export const allNotes = (state=[], action) => {
    switch (action.type) {
        case C.ADD_NOTE:
            return [
                ...state,
                action.note
            ];
        case C.DELETE_NOTE:
            return state.filter((x)=> x._id != action.id);
        case C.UPDATE_NOTE:
            let obj =  state.filter((x)=> x._id == action.id)[0];
            let others = state.filter((x)=> x._id != action.note.id);
            return [
                ...others,
                Object.assign({},obj,action.note)
            ];
        default:
            return state;
    }
   
}

export const CurrentNote = (state ={}, action) => {
    if (action.type == C.CURRENT_NOTE) {
        return action.payload;
    }
    return state; 
}

export const UserName = (state = "", action) => {
    
    if (action.type == C.UPDATE_USER) {
        return action.payload;
    }
    return state;
}


export default combineReducers({
    allNotes,
    CurrentNote,
    UserName
});
import React from 'react';
import C from './Constant';


export const AddUser = content => ({
    type: C.ADD_NOTE,
    note: content
});


export const getNoteWithId = id =>({ 
    type: C.GET_NOTE,
    id: id
    });
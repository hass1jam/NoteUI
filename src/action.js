import React from 'react';
import C from './Constant';


export const AddUser = content => ({
    type: C.ADD_NOTE,
    note: content
});


export const getAllNotes = () =>({
    type: C.GET_NOTES
});
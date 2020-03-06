import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';


const mapNotestonotes = state => {
    return {
        notes: state.allNotes
    }
}

const AppConnector = connect(mapNotestonotes)(App);


export default AppConnector;
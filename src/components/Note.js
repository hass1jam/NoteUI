import React from 'react';
import {connect} from 'react-redux';

const Note = props => { 
return (<div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{props.title}</span>
                        <p> {props.note}
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}


const noteState = (state, props) => {
    var obj = state.allNotes.filter(x => x._id == props.match.params.id)[0];
    return obj;
}

const NoteConnector = connect(noteState)(Note);

export default NoteConnector;
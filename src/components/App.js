import React from 'react';
import NoteList from './NoteList';

const App = props =>
<div>
    <NoteList notes={props.notes}/>
</div>

export default App;
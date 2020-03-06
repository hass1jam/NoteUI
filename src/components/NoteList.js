import React from 'react';
import {NoteRow} from './NoteRow';

export default class NoteList extends React.Component {

    render(){
        return (
            <table className="striped">
            <thead>
              <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Note</th>
                  <th>Is Viewed</th>
              </tr>
            </thead>
    
            <tbody>
                {
                   this.props.notes?.length > 0 ?  this.props.notes.map((x)=> <NoteRow key={x._id} row={x}/>) : <tr><td colSpan="5">Data Not Found</td></tr>
                }
            
            </tbody>
          </table>
        );
    }
}
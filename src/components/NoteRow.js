import React from 'react';


export const NoteRow = props =>
            <tr>
                <td>{props.row._id}</td>
                <td>{props.row.title}</td>
                <td>{props.row.date}</td>
                <td>{props.row.note}</td>
                <td>{props.row.isViewed}</td>
            </tr>

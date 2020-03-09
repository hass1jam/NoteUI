import React from 'react';
import {Link} from 'react-router-dom';

const returnLinkId = (id) => <Link to={"/note/" + id}>{id}</Link>

export const NoteRow = props =>
            <tr>
                <td>{returnLinkId(props.row._id)}</td>
                <td>{props.row.title}</td>
                <td>{props.row.date}</td>
                <td>{props.row.note}</td>
                <td>{props.row.isViewed}</td>
            </tr>

import React, { useState } from 'react';
import Login from './Login';
import Ticket from './Ticket'
import '../App.css'

 function Support() {
    const [state, setState] = useState('start')
    
    if (!localStorage.getItem('username')) return <Login />;
    let tableBody = JSON.parse(localStorage.getItem('tablebody'))
    if(!tableBody) {
        tableBody = []
    }
    const createTicket =() =>{
        setState('add-ticket')
    }
    const handleUpdate = () => {
        setState('start')
    }
    const deleteTicket = (e, t) => {
        tableBody.map((v,i) => {
            if(v.title == t) {
                tableBody.splice(i, 1)
            }
        })
        localStorage.setItem('tablebody', JSON.stringify(tableBody));
        window.location.reload();
    }

    const editTicket =(e, t) => {
        localStorage.setItem('title',t)
        setState('add-ticket')

    }

	return (
    <div className="support">
     {state === 'start' && (
       <div><table className="supportTable">
        <thead>
       <tr>
           <th>Title - Description - Priority</th>
       </tr>
       </thead>
       <tbody id="ticketTableBody">
           {tableBody.map(function(a) {
            return (<div><span>{a.title}</span> - <span>{a.description}</span> - <span>{a.priority}</span> <button onClick={(event) => deleteTicket(event, a.title)}>Delete</button>
            <button onClick={(event) => editTicket(event, a.title)}>Edit</button>
            </div>)}

 )}
       </tbody>
   </table>

    <button onClick={createTicket}>Add new ticket</button></div>
    )}

      {state === 'add-ticket' && <Ticket updateState={handleUpdate}/>}
        
  </div>
		
	);
}

export default Support;



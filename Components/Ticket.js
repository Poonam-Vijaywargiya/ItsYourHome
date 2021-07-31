import React, {useState} from 'react';
import Login from './Login';
 function Ticket(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const handleSubmitTicket = async (e) => {
      e.preventDefault();
      var testObject = { 'title': title, 'description': description, 'priority': priority };
      let tableBody = JSON.parse(localStorage.getItem("tablebody"));
      if(tableBody == null) tableBody = [];
      tableBody.push(testObject)
      localStorage.setItem('tablebody', JSON.stringify(tableBody));
        props.updateState();
      }
      // useEffect(() => {
      //   // Update the document title using the browser API
      //   if(localStorage.getItem(title)) {
      //     setTitle(localStorage.getItem(title))
      //   }
      // });
	return (
    <div className="App" >
    <div >
        <h1 className="title">Create New Ticket</h1>
        <form onSubmit={handleSubmitTicket}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="Ticket Title" required />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Ticket Descripion" required />
          <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)}  placeholder="Ticket Priority" required />
          <div >
            <button type="submit" >
              Submit Ticket
            </button>
          </div>
        </form>
      </div>
  </div>
		
	);
}

export default Ticket;

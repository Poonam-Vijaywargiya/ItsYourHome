
import React from 'react';
import Login from './Login';
import '../App.css'
function Documents() {
if (!localStorage.getItem('username')) return <Login />;
let files = JSON.parse(localStorage.getItem('files'));

if(files == null) files = [];
  const submitForm = (event) => {
    alert('document uploaded!!')
  };
  function handleChange(event) {
    var testObject = event.target.files[0].name;
    files.push(testObject)
    localStorage.setItem('files', JSON.stringify(files));
    console.log(`Selected file - ${event.target.files[0].name}`);
  }
  return (
    <div className='doc'>
        <div className='uploadeddoc'>
        {files.map(function(a) {
        return (<div key={a}>{a}</div>)}
        )}
        </div> 
    <form >
        <br />
        <input type="file" onChange={handleChange} />
        <br />
        <button type="submit" >Upload</button>
      </form>
    </div>
  );
}

export default Documents;

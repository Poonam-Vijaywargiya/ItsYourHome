import React from 'react';
import Login from './Login';
import vr from '../assets/img/VR.gif'
 function VirtualTour() {
    if (!localStorage.getItem('username')) return <Login />;
	return (
    <div className="App">
    <img src={vr}></img>
  </div>
		
	);
}

export default VirtualTour;

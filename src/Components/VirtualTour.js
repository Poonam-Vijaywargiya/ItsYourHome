import React from 'react';
import Login from './Login';
import movie from '../assets/VirtualVisit.mov'
 function VirtualTour() {
    if (!localStorage.getItem('username')) return <Login />;
	return (
    <div className="App">
    <video src={movie} autoPlay="true"/>
  </div>
		
	);
}

export default VirtualTour;


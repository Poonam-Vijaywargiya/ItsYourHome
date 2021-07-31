import React from 'react';
import Login from './Login';
import building from '../assets/img/building.jpeg'
import '../App.css';
 function Home() {
    if (!localStorage.getItem('username')) return <Login />;
	return (
    <div className="App">
    <img className="homeimg" src={building} alt="Building" />
    <p>
       Some information about project
       some more details about project
    </p>
  </div>
		
	);
}

export default Home;

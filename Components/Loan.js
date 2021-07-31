import React from 'react';
import Login from './Login';
import building from '../assets/img/building.jpeg'
import MediaCard from './MediaCard'
import '../App.css';
import sbi from '../assets/img/sbi.png'
import hdfc from '../assets/img/hdfc.png'
import hsbc from '../assets/img/hsbc.png'
 function Loan() {
    if (!localStorage.getItem('username')) return <Login />;
	return (
    <div className="loan">
    <MediaCard className ="msc" img={sbi}  title="SBI" name="SBI" description="SBI provides exciting benefits"></MediaCard>
    <MediaCard className ="msc" img={hdfc} title="HDFC" name="HDFC" description="HDFC bank provides home loan at 6.5"></MediaCard>
    <MediaCard className ="msc" img={hsbc}  title="HSBC" name="HSBC" description="HSBC bank gives loan for interiors as well"></MediaCard>
  </div>
		
	);
}

export default Loan;


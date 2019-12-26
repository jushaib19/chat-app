import React from 'react';
//import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../Title.css';


const Title = (props) => {

 const clear = () =>
 {
     localStorage.clear();
 }



return(
<div style={{textAlign: 'center', border: '2px solid grey', color: 'orange' }}>
<h2>Welcome {props.loggedInUser}</h2>
<Link to='/' >
<button onClick={clear} className='btn'>Log Out</button>
</Link>
</div>
);
};

export default Title;
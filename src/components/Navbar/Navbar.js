import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      
      <ul>
        <li><Link to='/'> Home</Link> </li>
        <li><Link to='/component'> Component</Link> </li>
        <li><Link to='/props'> Props</Link> </li>
        <li><Link to='/about'> About</Link> </li>
        <li><Link to='/task'> To-Do </Link> </li>
        <li><Link to='/usestate'> Usestate </Link> </li>
      </ul>
    </div>
    </>
  )
}

export default Navbar

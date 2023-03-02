import { useContext, useState } from 'react'
import {ViewerContext} from './ViewerContext'
import { Link, NavLink } from 'react-router-dom'

function NavBar(){

    return(
        <>
            <nav className='nav-bar' >
                <ul>
                    <li><Link to='/'>Login</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/arts'>Explore</Link></li>
                    <li><Link to='/galleries'>Galleries</Link></li>
                    <li><Link to='/visits'>Visits</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
                    <li><Link to='/editprofile'>Edit Profile</Link></li>
                </ul>
            </nav>
        </>
    )

}


export default NavBar;

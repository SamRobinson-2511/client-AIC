import { useContext, useState } from 'react'
import {ViewerContext} from './ViewerContext'
import { Link, NavLink } from 'react-router-dom'
import ArtList from './ArtList'
import GalleriesList from './GalleriesList'



function NavBar(){

    return(
        <>
            <nav className='nav-bar' >
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/arts'>Explore</Link></li>
                    <li><Link to='/galleries'>Galleries</Link></li>
                    <li><Link to='/visits'>Visits</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
                    <li><Link to='/editprofile'>Edit Profile</Link></li>
                    
                    
                </ul>
            </nav>
            <ArtList/>
            <GalleriesList/>
        </>
    )

}


export default NavBar;

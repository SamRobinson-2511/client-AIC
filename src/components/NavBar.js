
import {useState, useRef, useCallback, useContext, useHover} from 'react'
import {ViewerContext} from '../ViewerContext'
import {  Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const NavBar = () => {
    
    
    
    

    return(
        <>
        <div className='nav-container'>
            <nav id='nav-bar'>
                <div className='link-container'>
                    <li className="nav-link"><Link to='/about'>About</Link></li>
                </div>
                <div className='link-container'>
                    <li className="nav-link"><Link to='/arts'>Explore</Link></li>
                </div>
                <div className='link-container'>
                    <li className="nav-link"><Link to='/galleries'>Galleries</Link></li>
                </div>
                <div className='link-container'>
                    <li className='nav-link'><Link to='/galleries/:id/edit'>Edit Gallery</Link></li>
                </div>
                <div className='link-container'>
                    <li className="nav-link"><Link to='/visits'>Visits</Link></li>
                </div>
                <div className='link-container'>
                    <li className='nav-link'><Link to='/editprofile'>Edit Profile</Link></li>
                </div>
                <div className='link-container'>
                    <li className="nav-link"><Link to='/logout'>Logout</Link></li>
                </div>
                <div className='link-container'>
                    <li className="nav-link"><Link to='/reviews'>Reviews</Link></li>
                </div>
                <div id='searchbar'>
                <SearchBar/>
                </div>
            </nav>
        </div>
        </>
    )

}


export default NavBar;

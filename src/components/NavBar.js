
import {useState, useRef, useCallback, useContext, useHover} from 'react'
import {ViewerContext} from '../context/ViewerContext'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const NavBar = () => {
    
    return(
        <>

        <div className='navbar'>
        <nav>
            <a className='navbar-brand'>NowMuseuMe</a>
            <div className='link-container'>
                <div>
                    <li className="nav-link"><Link to='/about'>About</Link></li>
                </div>
                <div className='link-container'>
                    <li className="nav-link"><Link to='/arts'>Explore</Link></li>
                </div>
                <div className='link-container'>
                    <li className="nav-link"><Link to='/galleries'>Galleries</Link></li>
                </div>
                {/* <div className='link-container'>
                    <li className='nav-link'><Link to='/galleries/:id/edit'>Edit Gallery</Link></li>
                </div> */}
                <div className='link-container'>
                    <li className="nav-link"><Link to='/visits'>Visits</Link></li>
                </div>
                {/* <div className='link-container'>
                    <li className='nav-link'><Link to='/editprofile'>Edit Profile</Link></li>
                </div> */}
                <div className='link-container'>
                    <li className="nav-link"><Link to='/logout'>Logout</Link></li>
                </div>

                <div id='searchbar'>
                <SearchBar/>
                </div>
            </div>
         

            </nav>
            
        </div>
        </>
    )

}


export default NavBar;


{/* <div className='link-container'>
                    <li className="nav-link"><Link to='/about'>About</Link></li>
                </div>
                <div className='link-container'>
                    <li className="nav-link"></li>
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
                </div> */}



                // <nav className="navbar navbar-expand-lg navbar-light bg-light">
                // <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"></button>
                //     <ul className='navbar-nav'>
                //     <li className="nav-item dropdown">
                //         <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                //             Dropdown 
                //         </button>
                //         <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                //             <Link className="dropdown-link" to="/arts">Explore Arts</Link>
                //             <Link className="dropdown-link" to="/galleries">Your Galleries</Link>
                //             </div>
                //     </li>
                    
    
                //     </ul>
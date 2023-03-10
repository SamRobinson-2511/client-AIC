
import {useState, useRef, useCallback, useContext, useHover} from 'react'
import {ViewerContext} from '../context/ViewerContext'
import { Link } from 'react-router-dom'  
import useCount from '../hooks/count-hook'
import SearchBar from '../components/SearchBar'
import ClickCounter from './ClickCounter'
import GalleriesList from '../GalleriesList'

const NavBar = ({handleLogout}) => {
    const [search, setSearch] = useState('')
    const [galleries, setGalleries] = useState([])
    const [arts, setArts] = useState([])
    const [visits, setVisits] = useState([])
    const searchGalleries = galleries.filter((gallery)=> {
        return gallery.title?.toLowerCase().includes(search.toLowerCase())
    })
    const searchArts = arts.filter((art)=> {
        return art.title?.toLowerCase().includes(search.toLowerCase())
    })
    const searchVisits = visits.filter((visit)=> {
        return visit.title?.toLowerCase().includes(search.toLowerCase())
      })

    
    return(
        <nav className='nav'>
            <a className='site-title'>NowMuseuMe</a>
            <div id='searchbar'>
                {/* <SearchBar setSearch={setSearch} /> */}
            </div>
            <div className='click-counter'>
                <ClickCounter  />
            </div>
         

            <div className='navbar-nav'>
                <div className='link-container'>
                    <li className="nav-link"><Link to='/arts'>Arts</Link></li>
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
                {/* <div className='link-container'>
                    <li className='nav-link'><Link to='/editprofile'>Edit Profile</Link></li>
                </div> */}
                <div>
                    <li className="nav-link"><Link to='/about'>About</Link></li>
                </div>
                <div className='link-container'>
                    <li className="nav-link"><Link onClick={handleLogout} to='/logout'>Logout</Link></li>
                </div>    
            </div>
        </nav>
            
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
import { useState } from 'react'
import { Link } from 'react-router-dom'



function NavBar(){
    const [menu, setMenu] = useState(false)

    return(
        <>
            <nav className='nav-bar' >
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/explore'>Explore</Link></li>
                    <li><Link to='/galleries'>Galleries</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
                </ul>
            </nav>

        </>



    )

}


export default NavBar;

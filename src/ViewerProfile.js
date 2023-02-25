import { Routes, Route, Link } from 'react-router-dom'
import GalleriesList from './GalleriesList'
import Gallery from './Gallery'
import NewGalleryForm from './NewGalleryForm'
import GalleryLayout from './GalleryLayout'




function ViewerProfile(){
    return(
        <>
        <nav>
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/galleries'>Galleries</Link></li>
            </ul>
        </nav>
            <h1>Welcome, ${}</h1>

            <Routes>
                <Route path='/galleries' element={<GalleryLayout/>}>
                    <Route index element={<GalleriesList/>}/>
                    <Route path=':id'element={<Gallery/>}/>
                    <Route path='new'element={<NewGalleryForm/>}/>
                </Route>
        </Routes>
        
        
        
        </>

    )
}

export default ViewerProfile;
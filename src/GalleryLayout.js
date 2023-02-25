import { Link, Outlet } from 'react-router-dom'
function GalleryLayout(){
    return(
        <>
            <Link to='/galleries/1'>Gallery 1</Link>
            <br/>
            <Link to='/galleries/2'>Gallery 2</Link>
            <br/>
            <Link to='/galleries/new'>New Gallery</Link>
            <Outlet context={{hello: 'world'}}/>
        </>
    )

}

export default GalleryLayout;

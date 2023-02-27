
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
function GalleryLayout(){

   
     
   
    return(
        <>
            <Link to='/galleries/:id'>Gallery 1</Link>
            <br/>
            <Link to='/galleries/new'>New Gallery</Link>
            <Outlet context={{}}/>

        </>
    )

}

export default GalleryLayout;

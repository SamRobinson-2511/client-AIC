
import useFetch from './hooks/fetch-hook'
import GalleryCard from './GalleryCard'
import useHover from './hooks/hover-hook'
import DeleteButton from './components/DeleteButton'
// import useSearch from './hooks/search-hook'


function GalleriesList(){
    const {data, isLoaded, error} = useFetch(`/galleries`)
    // const filteredData = useSearch()
    
    if (error !== null) {return <div>Error: {error.message}</div>}
    if (!isLoaded) {return <div>Loading...</div>}

    
    const galleryCards = data.map(gal => {
    return <GalleryCard
        key={gal.id}
        id={gal.id}
        title={gal.title}
        description={gal.description}
        image_url={gal.image_url}
        arts={gal.arts}
        />
    })

    const handleDetails = (e)=> {
        console.log(e)
       
    }
    
    return(
        <>
           <div className="gallery-card-container"
                onMouseEnter={handleDetails}
            >
            <h1>Your Galleries</h1>
                {galleryCards}
        </div>        
        </>
    )
}

export default GalleriesList;
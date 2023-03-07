
import { Link } from 'react-router-dom'
const About = () => {
    return(
      <div className='about-container'>
        <div className='about-body' style={{backgroundImage: `url("https://a.travel-assets.com/findyours-php/viewfinder/images/res70/237000/237487-Art-Institute-Of-Chicago.jpg")`}}>
          <ul>
            <Link to={`/about`}></Link>
            <p> This is a rudimentary attempt at creating a website to navigate the collection of the Art Institute of Chicago </p>
        </ul>
      </div>
    </div>
    )
  }

export default About;
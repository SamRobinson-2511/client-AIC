import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom'
const About = () => {
    return(
      <div style={{backgroundImage: `url("https://a.travel-assets.com/findyours-php/viewfinder/images/res70/237000/237487-Art-Institute-Of-Chicago.jpg")`}}>
        <NavBar/>
        <ul>
          <Link to={`/about`}></Link>
          <p> This is a rudimentary attempt at creating a website to navigate the collection of the Art Institute of Chicago </p>
        </ul>
      </div>
    )
  }

export default About;
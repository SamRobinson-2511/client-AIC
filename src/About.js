import NavBar from "./NavBar";
import { Link } from 'react-router-dom'
const About = () => {
    return(
      <div>
        <NavBar/>
        <ul>
          <Link to={`/about`}></Link>
          <p> This is a rudimentary attempt at creating a website to navigate the collection of the Art Institute of Chicago </p>
        </ul>
      </div>
    )
  }

export default About;
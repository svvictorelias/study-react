import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Navbar
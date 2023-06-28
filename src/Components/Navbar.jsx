import { Link } from "react-router-dom";
const Navbar = () => {
  return (
  <nav className="navbar">
    <Link className = "link" to="/">Home</Link><br/>
    <Link className = "link" to="/about">About</Link>
  </nav>
  )
}

export default Navbar;
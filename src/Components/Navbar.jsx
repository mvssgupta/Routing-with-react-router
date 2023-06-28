import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "red" : "black",
    };
  };

  return (
    <nav className="navbar">
      <NavLink style={navLinkStyles} className="link" to="/">
        Home
      </NavLink>
      <br />
      <NavLink style={navLinkStyles} className="link" to="/about">
        About
      </NavLink>
      <br />
      <NavLink style={navLinkStyles} className="link" to="/products">
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;



//generally adding navLink instead of link adds an additional class(called active) to the respective components
//so that we can style the component(using css or in the component itself using js) such that it differentiates active link and normal link
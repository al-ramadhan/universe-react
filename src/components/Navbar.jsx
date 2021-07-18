import { Link } from "react-router-dom";

const Navbar = (user) => {

  return ( 
    <nav>
      <h3>Universe</h3>
      <div className="menu">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
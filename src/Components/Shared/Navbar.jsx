// import { Container, Nav, NavDropdown } from "react-bootstrap";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Nav, NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          {/* <a className="navbar-brand">Navbar</a> */}
          <img src="/src/assets/autofy.png" alt="" width={"100px"} />
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a> */}
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <Button variant="warning">Sign In</Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import { Container, Nav, NavDropdown } from "react-bootstrap";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Nav, NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#226B87" }}>
        <div className="container-fluid">
          <img src="/src/assets/autofy.png" alt="" width={"100px"} />
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a> */}
                <Link to="/" className="nav-link text-white fw-semibold">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white fw-semibold">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white fw-semibold">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <Button
            className="fw-semibold"
            style={{
              backgroundColor: "#FE6F00",
              border: "none",
            }}>
            Sign In
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

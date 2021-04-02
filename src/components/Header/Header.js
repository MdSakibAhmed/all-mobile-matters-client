import React from "react";
import { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Navbar bg="light" expand="lg" className="pt-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          All Mobile Matters
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: "auto" }}>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/orders">
              Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Deals
            </Nav.Link>
            {!loggedInUser.email && (
              <Nav.Link
                as={Link}
                to="/login"
                className=" text-white  btn-primary pt-2 rounded pb-0 pr-1 pl-1"
              >
                Login
              </Nav.Link>
            )}
            {loggedInUser.email && (
              <NavDropdown title={loggedInUser.name} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/logout">
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

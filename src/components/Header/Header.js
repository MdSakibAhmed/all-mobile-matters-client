import React from "react";
import { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // const dropDown = (
  //   <>
  //     <li className="nav-item dropdown">
  //       <Link
  //         className="nav-link dropdown-toggle"
  //         id="navbarDropdownMenuLink"
  //         role="button"
  //         data-bs-toggle="dropdown"
  //         aria-expanded="true"
  //       >
  //         {loggedInUser.name}
  //       </Link>
  //       <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
  //         <li>
  //           <Link className="dropdown-item" to="/">
  //             Profile
  //           </Link>
  //         </li>
  //         <li>
  //           <Link className="dropdown-item" to="/">
  //             Log out
  //           </Link>
  //         </li>
  //       </ul>
  //     </li>
  //   </>
  // );

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container d-flex justify-content-between">
       
    //       <Link className="navbar-brand" to="/">
    //         <h2>All Mobile Matters</h2>
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
      
    //     <div className="collapse navbar-collapse " id="navbarNav">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="orders">
    //             Orders
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="admin">
    //             Admin
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/">
    //             Deals
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           {!loggedInUser.email && (
    //             <Link className="nav-link btn-primary" to="/login">
    //               Login
    //             </Link>
    //           )}
    //         </li>
    //         {loggedInUser.email && dropDown}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <Navbar bg="light" expand="lg" className="pt-4">
    <Container>
  <Navbar.Brand as={Link} to="/">All Mobile Matters</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav style={{marginLeft:"auto"}} >
      <Nav.Link as={Link}   to="/">Home</Nav.Link>
      <Nav.Link as={Link}   to="/orders">Orders</Nav.Link>
      <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
      <Nav.Link as={Link} to="/">Deals</Nav.Link>
      {!loggedInUser.email && <Nav.Link as={Link} to="/login" className=" text-white  btn-primary pt-2 rounded pb-0 pr-1 pl-1">Login</Nav.Link>}
      {loggedInUser.email &&  <NavDropdown title={loggedInUser.name} id="basic-nav-dropdown"  >
        <NavDropdown.Item as={Link} to="/">Profile</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/logout">Log out</NavDropdown.Item>
        
      </NavDropdown> }
     
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;

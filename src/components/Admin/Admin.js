import React from "react";
import { Nav } from "react-bootstrap";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks,faPlusSquare,faEdit } from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
  const history = useHistory();
  const { path, url } = useRouteMatch();

  return (
    <>
      <div className="d-flex flex-wrap mt-5">
        <div className="bg-dark   pt-5  " style={{height:"100vh",width:"400px"}}>
          <h2 className="text-white text-center">All Mobile Matters</h2>

          <Nav  className="flex-column text-center">
            <Nav.Link
              as={Link}
              to={`${url}/manageProduct`}
              className=" text-white bold"
            ><FontAwesomeIcon className="me-2" icon={faTasks}/>
              Manage Product
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`${url}/addProduct`}
              className=" text-white bold"
            ><FontAwesomeIcon className="me-2" icon={faPlusSquare}/>
              Add Product
            </Nav.Link>
            <Nav.Link className=" text-white bold" as={Link} to="/">
            <FontAwesomeIcon className="me-2" icon={faEdit}/> Edit Product
            </Nav.Link>
          </Nav>
        </div>
        <div className=" ms-md-5 ms-0" style={{width:"50vw"}}>
          <Switch>
            <Route exact path={path}>
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/manageProduct`}>
              <ManageProduct></ManageProduct>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Admin;

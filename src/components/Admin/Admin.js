import React from "react";
import { Nav } from "react-bootstrap";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";

const Admin = () => {
  const history = useHistory();
  const { path, url } = useRouteMatch();

  return (
    <>
      <div className="d-flex">
        <div className="bg-dark w-25 pt-5  ">
          <h2 className="text-white text-center">All Mobile Matters</h2>

          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link
              as={Link}
              to={`${url}/manageProduct`}
              className=" text-white bold"
            >
              Manage Product
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`${url}/addProduct`}
              className=" text-white bold"
            >
              Add Product
            </Nav.Link>
            <Nav.Link className=" text-white bold" as={Link} eventKey="link-2">
              Edit Product
            </Nav.Link>
          </Nav>
        </div>
        <div>
          <Switch>
            <Route exact path={path}>
              {/* <h4>Please select a topic</h4> */}
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

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CheckOut from "./components/CheckOut/CheckOut";
import Orders from "./components/Orders/Orders";
import LogOut from "./components/LogOut/LogOut";
import NoMatch from "./components/NoMatch/NoMatch";
export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] =  useState({})
 
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>


        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/logout">
          <LogOut></LogOut>
        </Route>
       
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path="/BuyNow/:productId">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path="*">
        <NoMatch></NoMatch>

        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

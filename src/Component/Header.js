import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>News Room</Navbar.Brand>
        <Nav className="me-auto nav_bar_wrap">
          <NavLink to="/usa">USA</NavLink>
          <NavLink to="/london">London</NavLink>
          <Link to="/dubai">Dubai</Link>
          <Link to="/india">India</Link>
          <Link to="/world">World News</Link>
          <Link to="/weather">Weather App</Link>
          <Link to="/search">Search Image</Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;

/* <Navbar bg="primary" variant="dark">
<Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Nav className="me-auto">
  <Link to="login">Login</Link>
  <Link to="register">Register</Link>
  <Link to="add">Add Product</Link>
  <Link to="update">Udate Product</Link>
</Nav>
</Navbar> */

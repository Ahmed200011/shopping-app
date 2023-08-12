import React from "react";
import { Navbar as NavBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppContex";

const NavePar = () => {
  const { openCart,windowQuantity } = useShoppingCart();
  return (
    <NavBs sticky="top" className="bg-light shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            {" "}
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            {" "}
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            {" "}
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          className="rounded-circle"
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          onClick={openCart}
        >
          curt
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              right: "0",
              top: "68%",
              transform: "translate(21%, -2%)",
              color: "rgb(249 249 249)",
            }}
          >
            {windowQuantity}
          </div>
        </Button>
      </Container>
    </NavBs>
  );
};

export default NavePar;

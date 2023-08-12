import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import CartItem from "../Componants/cartItem/CartItem";
import formatCurrency from "../Componants/Currency";
import storItem from "../data/items.json";

const Window = ({ cartItem, isOpen, closeCart }) => {
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Curt</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
        <div className="mt-3 fs-3 ms-auto">
        total{" "}
          {formatCurrency(
            cartItem.reduce((total, cartItem) => {
              const item = storItem.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Window;

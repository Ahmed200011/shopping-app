import React from "react";
import { Button, Stack } from "react-bootstrap";
import storeItem from "../../data/items.json";
import { useShoppingCart } from "../../context/ShoppContex";
import formatCurrency from "../Currency";

const CartItem = ({ id, quantity }) => {
  const { removeItem } = useShoppingCart();
  const item = storeItem.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center ">
    
      <img
        src={item.imageUrl}
        alt={item.name}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              X{quantity}
            </span>
          )}
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
      </div>
      <div>$ {formatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeItem(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;

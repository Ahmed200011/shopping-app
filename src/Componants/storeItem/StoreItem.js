import React from "react";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "../Currency";
import { useShoppingCart } from "../../context/ShoppContex";

const StoreItem = ({ id, name, price, imageUrl }) => {
  const {
    getQuantityItem,
    increasCartQuantity,
    decreasCartQuantity,
    removeItem,
  } = useShoppingCart();
  let quantity = getQuantityItem(id);
  return (
    <Card className="h-100">
      <Card.Img
        src={imageUrl}
        variant="top"
        style={{ height: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-4">{name}</span>
          <span className="text-muted">{formatCurrency(price)} </span>
        </Card.Title>
        <div className="mt-auto ">
          {quantity === 0 ? (
            <Button onClick={()=>increasCartQuantity(id)} className="w-100">Add To Cart</Button>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <Button onClick={()=>increasCartQuantity(id)}>+</Button>
                <span className="fs-4 m-3">{quantity} in Cart</span>
                <Button onClick={()=>decreasCartQuantity(id)}>-</Button>
              </div>
              <Button onClick={()=>removeItem(id)} variant="danger">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;

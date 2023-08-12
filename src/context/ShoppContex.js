import { createContext, useContext, useEffect, useState } from "react";
import Window from "./Window";
const initState = localStorage.getItem("items_cart")
  ? JSON.parse(localStorage.getItem("items_cart"))
  : [];

const ShoppingCartContext = createContext({});

const ShoppContexProvider = ({ children }) => {
  const [cartItem, setcartItem] = useState(initState); //[{id,quantity}]
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem("items_cart", JSON.stringify(cartItem));
  }, [cartItem]);

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };

  const windowQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const getQuantityItem = (id) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
    // find((item) => item.id === id)?.quantity || 0;
  };
  const increasCartQuantity = (id) => {
    setcartItem((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreasCartQuantity = (id) => {
    setcartItem((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItem = (id) => {
    setcartItem((currItem) => currItem.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItem,
        getQuantityItem,
        increasCartQuantity,
        decreasCartQuantity,
        removeItem,
        openCart,
        closeCart,
        windowQuantity,
      }}
    >
      {children}
      <Window isOpen={isOpen} cartItem={cartItem} closeCart={closeCart} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppContexProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

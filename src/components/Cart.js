import axios from "axios";
import "./Cart.css";
import CartItem from "./CartItem";
import SubmitButton from "./common/SubmitButton";
import { api } from "../config";
import toast from "react-hot-toast";

const Cart = ({ cartItem, setCartItem }) => {
  let total = 0;
  cartItem.forEach((item) => {
    total += item.price * item.qty;
  });

  const handleAdd = (itemId) => {
    // console.log("Item id", itemId);
    const newItem = cartItem.map((item) => {
      if (itemId === item.id) {
        // console.log("Item id", itemId);
        return {
          ...item,
          qty: item.qty + 1,
        };
      }
      return item;
    });
    setCartItem(newItem);
  };

  const handleReduce = (itemId) => {
    const newItem = cartItem.map((item) => {
      if (itemId === item.id && item.qty > 1) {
        return {
          ...item,
          qty: item.qty - 1,
        };
      }
      return item;
    });
    setCartItem(newItem);
  };

  const handleRemove = (itemId) => {
    const newCartItems = cartItem.filter((item) => {
      if (itemId === item.id) {
        return false;
      }
      return item;
    });

    setCartItem(newCartItems);
  };

  const handleOrder = async () => {
    try {
      await axios.post(`${api}/item/place-order`, { items: cartItem });
      toast.success("Order placed succesfully");
      setCartItem([]);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className='cart-container box-shadow'>
      <h2>Your order</h2>
      {cartItem.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            handleAdd={() => {
              handleAdd(item.id);
            }}
            handleReduce={() => handleReduce(item.id)}
            handleRemove={() => handleRemove(item.id)}
          />
        );
      })}

      {cartItem.length > 0 && (
        <>
          <div className='total'>Total : {total}</div>
          <SubmitButton
            text='Place Order'
            colorScheme='blue'
            className='place-order-button'
            onClick={handleOrder}
          />
        </>
      )}
    </div>
  );
};

export default Cart;

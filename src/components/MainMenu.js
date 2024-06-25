import { useEffect, useState } from "react";
import "./MainMenu.css";
import axios from "axios";
import MenuItem from "./MenuItem";
import { api } from "../config";
import toast from "react-hot-toast";

const MainMenu = ({ cartItem, setCartItem }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`${api}/item/all`);
      //   console.log(result.data);
      setItems(result.data);
    };
    fetchItems();
  }, []);

  const handleClick = (clickedItem) => {
    // console.log(clickedItem);

    const itemFound = cartItem.find((item) => {
      if (item.id === clickedItem.id) {
        return true;
      } else {
        return false;
      }
    });

    if (itemFound) {
      toast.error("Item already added");
      return;
    }

    const newCartItems = [...cartItem];
    const newItem = {
      ...clickedItem,
      qty: 1,
    };

    newCartItems.push(newItem);
    setCartItem(newCartItems);
  };

  return (
    <div className='main-menu-container'>
      {items.map((item) => {
        return (
          <MenuItem
            key={item.id}
            item={item}
            onClick={() => {
              handleClick(item);
            }}
          />
        );
      })}
    </div>
  );
};

export default MainMenu;

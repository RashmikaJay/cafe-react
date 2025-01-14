import { IconButton } from "@chakra-ui/react";
import { AddIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import { api } from "../config";

const CartItem = ({ item, handleAdd, handleReduce, handleRemove }) => {
  return (
    <div className='cart-item-container'>
      <img src={`${api}${item.image}`} alt='' />
      <div className='cart-item-details'>
        <h3 className='cart-item-title'>{item.name}</h3>
        <h5 className='cart-item-price'>
          {item.price} x {item.qty}
        </h5>

        <div className='add-dlt-btns'>
          <IconButton
            size='sm'
            colorScheme='blue'
            icon={<AddIcon w={3} h={3} onClick={handleAdd} />}
          />
          <IconButton
            size='sm'
            colorScheme='yellow'
            icon={<CloseIcon w={3} h={3} onClick={handleReduce} />}
          />
        </div>
      </div>

      <IconButton
        size='sm'
        colorScheme='red'
        onClick={handleRemove}
        icon={<DeleteIcon />}
      />
    </div>
  );
};

export default CartItem;

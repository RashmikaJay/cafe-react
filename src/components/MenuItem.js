import { api } from "../config";

const MenuItem = ({ item, onClick }) => {
  return (
    <div className='menu-item-container' onClick={onClick}>
      <img src={`${api}${item.image}`} />
      <h2 className='menu-item-title'>{item.name}</h2>
      <h3 className='menu-item-price'>{item.price}</h3>
    </div>
  );
};

export default MenuItem;

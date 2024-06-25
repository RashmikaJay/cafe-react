import { Link } from "react-router-dom";

const Sidebar = () => {
  const items = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Menu Items",
      path: "/admin/menu-items",
    },
    {
      id: 1,
      name: "Orders",
      path: "/admin/orders",
    },
  ];

  return (
    <div className='sidebar'>
      {items.map((item) => (
        <Link to={item.path} key={item.id} className='sidebar-item'>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

import { Avatar, Button } from "@chakra-ui/react";
import { useGlobal } from "../../GlobalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../config";

const AdminNavbar = () => {
  const { user, setUser } = useGlobal();
  const navigate = useNavigate();

  const handleLogut = async () => {
    await axios.post(`${api}/auth/logout`, {}, { withCredentials: true });
    setUser(null);
    navigate("/");
  };

  return (
    <div className='admin-navbar-container'>
      <h2>Admin Dashboard</h2>
      <div className='admin-navbar-buttons'>
        {user && (
          <div className='admin-navbar-avatar'>
            <Avatar name={user.email} size='sm' />
            {user.email}
          </div>
        )}
        <Button colorScheme='yellow' variant='outline' onClick={handleLogut}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminNavbar;

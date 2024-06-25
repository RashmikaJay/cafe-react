import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { Button } from "@chakra-ui/react";
import "./Home.css";
import MainMenu from "../components/MainMenu";
import Cart from "../components/Cart";
import { useState } from "react";
import { useGlobal } from "../GlobalContext";

const Home = () => {
  const [cartItem, setCartItem] = useState([]);
  const { user } = useGlobal();

  return (
    <div className='home-container'>
      <div className='home-nav'>
        <Logo />
        <div>
          {user ? (
            <Button colorScheme='teal'>
              <Link to='/admin'>Go to Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button colorScheme='teal' variant='outline'>
                <Link to='/login'>Login</Link>
              </Button>
              <Button colorScheme='yellow' variant='outline'>
                <Link to='/register'>Register</Link>
              </Button>
            </>
          )}
        </div>
      </div>
      <div className='home-inner-container'>
        <MainMenu cartItem={cartItem} setCartItem={setCartItem} />
        <Cart cartItem={cartItem} setCartItem={setCartItem} />
      </div>
    </div>
  );
};

export default Home;

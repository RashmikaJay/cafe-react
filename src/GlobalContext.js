import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "./config";
import Loading from "./components/common/Loading";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(`${api}/auth/me`, {
          withCredentials: true,
        });
        console.log(result.data);
        setUser(result.data);
      } catch (error) {}
      setLoading(false);
    };
    fetchUser();
  }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {loading ? <Loading /> : <>{children}</>}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobal = () => {
  return useContext(GlobalContext);
};

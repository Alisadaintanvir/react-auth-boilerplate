import axios from "axios";
import Cookies from "js-cookie";
import useStore from "../store/store";
import API_CONFIG from "./apiConstant";

const BASE_URL = API_CONFIG.API_ENDPOINT;

const checkAuth = async () => {
  const { setIsLoggedIn, setUser } = useStore.getState();
  const token = Cookies.get("accessToken");

  if (!token) {
    setIsLoggedIn(false);
    return;
  }

  try {
    const res = await axios.get(`${BASE_URL}/api/verify-token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 200) {
      setIsLoggedIn(true);
      setUser(res.data.user);
    } else {
      setIsLoggedIn(false);
      setUser(null);
      Cookies.remove("accessToken");
    }
  } catch (err) {
    console.error("Error verifying token:", err);
    setIsLoggedIn(false);
    setUser(null);
    Cookies.remove("accessToken");
  }
};

export default checkAuth;

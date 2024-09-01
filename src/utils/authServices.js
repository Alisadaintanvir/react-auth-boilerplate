import Cookies from "js-cookie";
import axios from "axios";
import API_CONFIG from "../utils/apiConstant";

const BASE_URL = API_CONFIG.API_ENDPOINT;

export const logout = async () => {
  try {
    const token = Cookies.get("accessToken");

    if (!token) {
      return;
    }

    const response = await axios.post(`${BASE_URL}/api/logout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      Cookies.remove("accessToken");
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

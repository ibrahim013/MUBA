import setAuthHeader from "./setHeader";
import jwt_decode from "jwt-decode";

const authCheck = () => {
  let decoded;
  if (localStorage.token) {
    setAuthHeader(localStorage.token);
    decoded = jwt_decode(localStorage.token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return decoded;
  }
};

export default authCheck;
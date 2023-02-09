import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        // checks if user is logged in or not
        await axios.post("/dj-rest-auth/token/refresh/");
        // code below only runs if logged in
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // code below runs if user is logged out
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };
    handleMount();
  }, [history, userAuthStatus]);
};

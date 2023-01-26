import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

// allows user to easily use the variables once imported into their components
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  // gets logged in user data
  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  // calls the handleMount function once the components have mounted
  useEffect(() => {
    handleMount();
  }, []);

  // runs before children components are mounted
  // can attach interceptors before children mount
  useMemo(() => {
    // set axiosReq to always refresh access token before making a request
    axiosReq.interceptors.request.use(
      async (config) => {
        try {
          await axios.post("/dj-rest-auth/token/refresh/");
        } catch (err) {
          setCurrentUser((prevCurrentUser) => {
            if (prevCurrentUser) {
              history.push("/signin");
            }
            return null;
          });
          return config;
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    // set axiosRes to refresh access token if it gets a 401 error
    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                history.push("/signin");
              }
              return null;
            });
          }
          return axios(err.config);
        }
        return Promise.reject(err);
      }
    );
  }, [history]);

  return (
    // Context used to pass the currentUser and setCurrentUser variables to all chidlren components
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};

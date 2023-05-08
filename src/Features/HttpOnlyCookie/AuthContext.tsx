import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextValue {
  user: any;
  login: (payload: object) => Promise<void>;
}
const value: AuthContextValue = {
  user: {},
  login(payload) {
    return Promise.resolve();
  },

};



const AuthContext = createContext<AuthContextValue>(value);

interface AuthContextProviderProps {
  children?: React.ReactNode
}

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState(() => {
    let userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      return JSON.parse(userProfle);
    }
    return null;
  });

  const url = "http://http://hr.api.placechart.com"
  const navigate = useNavigate();
 
  const [contextValue, setContextValue] = useState<AuthContextValue>();

  const cv: AuthContextValue = {
    user: user,
    login: login
  }
  setContextValue(cv);
  
  return (
    <>
      <AuthContext.Provider value={contextValue!}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;

const url = "http://http://hr.api.placechart.com"
export const login = async (payload: object) => {
  const loginResponse = await axios.post(url + "/auth/login", payload, {
    withCredentials: true,
  });
  console.log(loginResponse);

  // let apiResponse = await axios.get("http://localhost:4000/user-profile", {
  //   withCredentials: true,
  // });
  const json = JSON.stringify(loginResponse.data);
  localStorage.setItem("userProfile", json);
  // setUser(json);
  // navigate("/");

};

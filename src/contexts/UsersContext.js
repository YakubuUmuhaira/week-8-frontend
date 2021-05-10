import { createContext, useReducer } from "react";
import usersReducer from "../reducers/UsersReducer";
import axios from "axios";

const initialState = {
  loading: true,
  userInfo: {},
  error: null,
};

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  //login action
  async function loginUser(userInfo) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "http://localhost:5050/api/v1/users/login",
      userInfo,
      config
    );

    localStorage.setItem("userInfo", JSON.stringify(res.data));
    const userLogin = (await localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};

    dispatch({
      type: "LOGIN",
      payload: userLogin,
    });
    console.log(res.data);
  }

  //register user
  async function registerUser(newuser) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5050/api/v1/users/register",
        newuser,
        config
      );

      dispatch({
        type: "REGISTER_USER",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  //logout
  const logout = async () => {
    await localStorage.removeItem("userInfo");
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <UsersContext.Provider
      value={{ userInfo: state.userInfo, loginUser, registerUser, logout }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;

import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./authRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("https://jobs-media-api.onrender.com/api/auth/login", user);
    console.log("LINE AT 10", res.data);
    dispatch(loginSuccess(res.data));
    return res.data;
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
    return error;
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  // console.log(user);
  try {
    const res = await axios.post(
      "https://jobs-media-api.onrender.com/api/auth/register",
      user
    );
    // console.log(res.data);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};

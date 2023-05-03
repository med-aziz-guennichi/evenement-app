import { toast } from "react-hot-toast";
import { publicRequest } from "../requestMethod";

import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutSuccess,
  updateInfoSuccess,
} from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const result = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(result.data));

    window.location.href = "/";
  } catch (error) {
    dispatch(loginFailed());
    toast.error("Invalid Email or Password", {
      duration: 4000,
      position: "top-center",
      style: { background: "red", color: "white" },
    });
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutSuccess());
  window.location.href = "/sign-in";
};

export const update = async (dispatch, user) => {
  const result = await publicRequest.put("/user/update", user);
  dispatch(updateInfoSuccess(result.data));
  window.location.reload();
};

export const deleteAccount = async (dispatch, user) => {
  const result = await publicRequest.delete("/user/delete/" + user);
  dispatch(logoutSuccess(result.data));

  window.location.href = "/sign-in";
};

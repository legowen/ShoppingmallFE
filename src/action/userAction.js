import api from "../utils/api";
import * as types from "../constants/user.constants";
import { commonUiActions } from "./commonUiAction";
import * as commonTypes from "../constants/commonUI.constants";
import { type } from "@testing-library/user-event/dist/type";
import { Navigate, useNavigate } from "react-router";

const loginWithToken = () => async (dispatch) => {
  try {
    const response = await api.get("/user/me");
    dispatch({ type: types.LOGIN_WITH_TOKEN_REQUEST });
    if (response.status !== 200) throw new Error(response.error);
    // console.log("RRR", response);
    dispatch({
      type: types.LOGIN_WITH_TOKEN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: types.LOGIN_WITH_TOKEN_FAIL, payload: error });

    dispatch(logout());
  }
};
const loginWithEmail =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.LOGIN_REQUEST });
      const response = await api.post("/auth/login", { email, password });
      if (response.status !== 200) throw new Error(response.error);
      sessionStorage.setItem("token", response.data.token);
      dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.LOGIN_FAIL, payload: error.error });
    }
  };
const logout = () => async (dispatch) => {
  sessionStorage.removeItem("token");

  dispatch({ type: types.LOGOUT });
}; // logout

const loginWithGoogle = (token) => async (dispatch) => {};

const registerUser =
  ({ email, name, password }, navigate) =>
  async (dispatch) => {
    try {
      //setup constant to user.constant
      dispatch({ type: types.REGISTER_USER_REQUEST });
      const response = await api.post("/user", { email, name, password });
      if (response.status !== 200) throw new Error(response.error);
      dispatch({ type: types.REGISTER_USER_SUCCESS });
      dispatch(
        commonUiActions.showToastMessage(
          "Congratulations! You've Registered.",
          "success"
        )
      );
      //Display toast Message
      navigate("/login");
      //Back to signin page
    } catch (error) {
      dispatch({ type: types.REGISTER_USER_FAIL, payload: error.error });
    }
  };
export const userActions = {
  loginWithToken,
  loginWithEmail,
  logout,
  loginWithGoogle,
  registerUser,
};

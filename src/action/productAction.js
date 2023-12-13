import api from "../utils/api";
import * as types from "../constants/product.constants";
import { toast } from "react-toastify";
import { commonUiActions } from "./commonUiAction";

const getProductList = (query) => async (dispatch) => {
  try {
    dispatch({ type: types.PRODUCT_GET_REQUEST });
    const response = await api.get("/product", {
      params: { ...query },
    });
    console.log("rrr", response);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.PRODUCT_GET_SUCCESS, payload: response.data });
    // console.log("response", response.data.data);
  } catch (error) {
    dispatch({ type: types.PRODUCT_GET_FAIL, payload: error.error });
  }
};
const getProductDetail = (id) => async (dispatch) => {};

const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: types.PRODUCT_CREATE_REQUEST });
    const response = await api.post("/product", formData);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({
      type: types.PRODUCT_CREATE_SUCCESS,
    });
    dispatch(
      commonUiActions.showToastMessage("Success to Add Product", "success")
    );
  } catch (error) {
    dispatch({ type: types.PRODUCT_CREATE_FAIL, payload: error.error });
    dispatch(commonUiActions.showToastMessage(error.error, "error"));
  }
};
const deleteProduct = (id) => async (dispatch) => {};

const editProduct = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: types.PRODUCT_EDIT_REQUEST });
    const response = await api.put(`/product/${id}`, formData);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.PRODUCT_EDIT_SUCCESS, payload: response.data.data });
    dispatch(commonUiActions.showToastMessage("Product Edited", "success"));
    dispatch(getProductList({ page: 1, name: "" }));
  } catch (error) {
    dispatch({ type: types.PRODUCT_EDIT_FAIL, payload: error.error });
    dispatch(commonUiActions.showToastMessage(error.error, "error"));
  }
};

export const productActions = {
  getProductList,
  createProduct,
  deleteProduct,
  editProduct,
  getProductDetail,
};

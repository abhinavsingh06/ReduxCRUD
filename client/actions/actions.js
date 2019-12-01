import { REGISTER, UPDATE, DELETE, USER_LIST } from "./types";
import axios from "axios";

const rootUrl = "http://localhost:3000/api/v1";

export const registerUser = value => {
  return {
    type: REGISTER,
    value
  };
};

export const updateUser = value => {
  return {
    type: UPADTE,
    value,
    id: value.id
  };
};

export const deleteUser = id => {
  return {
    type: DELETE,
    id
  };
};

export const userList = value => {
  return {
    type: USER_LIST,
    value
  };
};

//get all users
export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get("${rootUrl}/users/");
    dispatch({
      type: USER_LIST,
      data: [res.data]
    });
  } catch (err) {
    console.log(err);
  }
};

//create user
export const createUser = value => {
  return async dispatch => {
    try {
      const res = await axios.post("${rootUrl}/register", value);
      dispatch({
        type: REGISTER,
        data: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

//update user
export const changeUser = Id => {
  return async dispatch => {
    try {
      const res = await axios.put("${rootUrl}/${Id}");
      dispatch({
        type: UPDATE,
        data: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

//delete user
export const removeUser = Id => {
  return async dispatch => {
    try {
      const res = await axios.delete("${rootUrl}/${Id}");
      dispatch({
        type: DELETE,
        data: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

import axios from "axios";
import { ADD_CONTACT, GET_CONTACT, GET_CONTACT_BY_ID } from "../actions/types";

const CONTACT_API_URL = "https://jsonplaceholder.typicode.com/users";

// CREATE CONTACT
export const createContact = (data) => {
  return (dispatch) => {
    return axios
      .post(CONTACT_API_URL, data)
      .then((res) => {
        console.log("Submission success");
        const { id, name, email, phone } = res.data;
        dispatch({
          type: ADD_CONTACT,
          payload: {
            id,
            name,
            email,
            phone,
          },
        });
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        console.log("Add contact service call is over");
      });
  };
};

// GET ALL CONTACT

export const getAllContact = () => {
  return (dispatch) => {
    return axios
      .get(CONTACT_API_URL)
      .then((res) => {
        console.log("Submission success");
        console.log(res);
        // const { id, name, email, phone } = res.data;
        dispatch({
          type: GET_CONTACT,
          payload: res.data,
        });
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        console.log("Add contact service call is over");
      });
  };
};

// GET CONTACT DETAIL
export const getContactDetailByID = (contactID) => {
  return (dispatch) => {
    return axios
      .get(CONTACT_API_URL + "/" + contactID)
      .then((res) => {
        console.log("Submission success");
        // console.log(res);
        const { id, name, email, phone } = res.data;
        dispatch({
          type: GET_CONTACT_BY_ID,
          payload: {
            id,
            name,
            email,
            phone,
          },
        });
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        console.log("Add contact service call is over");
      });
  };
};

// UPDATE CONTACT
export const updateContactDetailByID = (contactID) => {
  return (dispatch) => {
    return axios
      .put(CONTACT_API_URL + "/" + contactID)
      .then((res) => {
        console.log("Submission success");
        console.log(res);
        // const { id, name, email, phone } = res.data;
        // dispatch({
        //   type: GET_CONTACT_BY_ID,
        //   payload: {
        //     id,
        //     name,
        //     email,
        //     phone,
        //   },
        // });
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        console.log("Add contact service call is over");
      });
  };
};

// DELETE CONTACT

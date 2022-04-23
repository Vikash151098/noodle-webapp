import axios from "axios";
import {
    GET_BRANDS,
    ADD_MORE_BRANDS,
    GET_IMAGE,
    GET_UNIQUE_BRANDS
} from "../actions/types";
const brandsApi = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json";
const imageApi = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json";
// CREATE CONTACT
export const getBrands = () => {
    return (dispatch) => {
        return axios
            .get(brandsApi)
            .then((res) => {
                console.log("Submission success");
                dispatch({
                    type: GET_BRANDS,
                    payload: res.data
                });
            })
            .catch((err) => {
                throw err;
            })
            .finally(() => {
                console.log("get brands service call is over");
            });
    };
};

export const getUniqueBrands = () => {
    return (dispatch) => {
        return dispatch({
            type: GET_UNIQUE_BRANDS,
        });
    }
}

export const addMore = (data) => {
    return (dispatch) => {
        return dispatch({
            type: ADD_MORE_BRANDS,
            payload: data
        });
    }
}

export const getAllImage = () => {
    return (dispatch) => {
        return axios
            .get(imageApi)
            .then((res) => {
                console.log("Submission success");
                dispatch({
                    type: GET_IMAGE,
                    payload: res.data
                });
            })
            .catch((err) => {
                throw err;
            })
            .finally(() => {
                console.log("get image service call is over");
            });
    };
}

// CREATE CONTACT
// export const createContact = (data) => {
//     return (dispatch) => {
//         return axios
//             .post(CONTACT_API_URL, data)
//             .then((res) => {
//                 console.log("Submission success");
//                 const { id, name, email, phone } = res.data;
//                 dispatch({
//                     type: ADD_CONTACT,
//                     payload: {
//                         id,
//                         name,
//                         email,
//                         phone,
//                     },
//                 });
//             })
//             .catch((err) => {
//                 throw err;
//             })
//             .finally(() => {
//                 console.log("Add contact service call is over");
//             });
//     };
// };
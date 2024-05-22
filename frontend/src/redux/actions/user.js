// import axios from "axios";
// import {server} from "../../server";

// //load user

// export const loadUser = () => async(dispatch) =>{
//  try{
//   dispatch({
//     type: "LoadUserRequest",

//   });
//   const { data } = await axios.get(`${server}/user/getuser` , {withCredentials: true ,});
//   dispatch({
//     type: "LoadUserSuccess",
//     payload : data.user,
//   });
//  }catch(error){
//      dispatch({
//         type: "LoadUserFail",
//         payload : error.response.data.message,
//      });
//  }
//  }


//////

import axios from "axios";
import { server } from "../../server";

// Load user
export const loadUser = () => async(dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    const response = await axios.get(`${server}/user/getuser`, { withCredentials: true });

    if (response && response.data && response.data.user) {
      dispatch({
        type: "LoadUserSuccess",
        payload: response.data.user,
      });
    } else {
      throw new Error("Invalid response format: User data not found");
    }
  } catch (error) {
    let errorMessage = "An error occurred while loading user data";
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }
    dispatch({
      type: "LoadUserFail",
      payload: errorMessage,
    });
  }
};


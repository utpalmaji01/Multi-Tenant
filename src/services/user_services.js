/*************************************************************
 *
 * Purpose         : Define actions for various http methods
 *
 * @description    : Actions to be done when http methods are called.
 *
 *
 * @file           : userServices.js
 * @overview       : Actions of http methods
 * @module         : service
 * @version        : 1.0
 * @since          : 31/10/2020
 *
 * **********************************************************/

import axiosServices from "./axios_service.js";

class userServices {
  /********************************* User Services *********************************/

  /*
   * @description service to pass request to create new user
   * @params {signUpObject} data i.e. details of the user like name, email, password etc.
   */
  newUserSignUp = (signUpObject) => {
    return axiosServices.postServices(
      "http://192.168.1.56:8000/api/v1/main/users/",
      signUpObject
    );
  };

  /*
   * @description service to pass request to log in user
   * @params {logInObject} data i.e. email and password of the user
   */
//   userLogIn = (logInObject) => {
//     return axiosServices.postServices(
//       process.env.REACT_APP_LOG_IN_API_PATH,
//       logInObject
//     );
//   };
}

export default new userServices();

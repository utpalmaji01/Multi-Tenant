/*************************************************************
 *
 * Purpose         : Define actions for various http methods which
 *                   take url path and object to do require task and
 *                   return responce or error
 *
 * @description    : Actions to be done when http methods are called.
 *
 * @file           : axiosServices.js
 * @overview       : Actions of http methods
 * @module         : service
 * @version        : 1.0
 * @since          : 1/03/2021
 *
 * **********************************************************/

import axios from "axios";

class axiosServices {
  getServices = (url, isTokenRequired = false, header = null) => {
    console.log("reach get service");
    return axios
      .get(url, isTokenRequired && header);
  };

  postServices = (url, data, isTokenRequired = false, header = null) => {
    console.log("reach post service");
    return axios
      .post(url, data, isTokenRequired && header);
  };
  putServices = (url, data, isTokenRequired = false, header = null) => {
    console.log("reach put service");
    return axios
      .put(url, data, isTokenRequired && header);
  };
  deleteServices = (url, isTokenRequired = false, header = null) => {
    console.log("reach delete service");
    return axios
      .delete(url, isTokenRequired && header);
  };
}

export default new axiosServices();

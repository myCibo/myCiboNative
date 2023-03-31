import axios from "axios";

// MainHandler class
export default class MainHandler {

  constructor() {
    this.baseURL = process.env.DEV_BACKEND_URL;
    this.api = axios.create({ baseURL: this.baseURL });
  }

  get(url, callback) {
    this.api
      .get(url)
      .then((response) => {
        // console.log("Received response:", response.data);
        callback(null, response.data);
      })
      .catch((error) => callback(error));
  }

  post(url, data, callback) {
    this.api
      .post(url, data)
      .then((response) => {
        // console.log("Received response:", response.data);
        callback(null, response.data);
      })
      .catch((error) => callback(error));
  }

  put(url, data, callback) {
    this.api
      .put(url, data)
      .then((response) => {
        // console.log("Received response:", response.data);
        callback(null, response.data);
      })
      .catch((error) => callback(error));
  }

  delete(url, callback) {
    this.api
      .delete(url)
      .then((response) => {
        // console.log("Received response:", response.data);
        callback(null, response.data);
      })
      .catch((error) => callback(error));
  }
}
import axios from "axios";

let url = ""
if (process.env.DEV === true) {
  url = process.env.DEV_BACKEND_URL;
} else {
  url = process.env.BACKEND_URL;
}

// MainHandler class
export default class MainHandler {

  constructor() {
    this.baseURL = url;
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
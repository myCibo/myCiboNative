import MainHandler from "./MainHandler";

export default class UserHandler extends MainHandler {
  constructor() {
    super();
  }

  errorHandler(error) {
    console.error("Error:", error);
  }

  getAllUsers(callback) {
    this.get("/users", (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getUserById(id, callback) {
    this.get(`/users/id/${id}`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getAllUsersPromise() {
    return new Promise((resolve, reject) => {
      this.get("/users", (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }
  
  getUserByIdPromise(id) {
    return new Promise((resolve, reject) => {
      this.get(`/users/id/${id}`, (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

  getUserByEmail(email, callback) {
    this.get(`/users/email/${email}`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  createUser(data, callback) {
    this.post("/users", data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  updateUser(id, data, callback) {
    this.put(`/users/${id}`, data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  deleteUser(id, callback) {
    this.delete(`/users/${id}`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

}
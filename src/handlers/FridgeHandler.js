import MainHandler from "./MainHandler";

export default class FridgeHandler extends MainHandler {
  constructor() {
    super();
  }

  errorHandler(error) {
    console.error("Error:", error);
  }

  getAllFridges(userid, callback) {
    this.get(`/fridges/userid/${ userid }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getFridgeById(id, callback) {
    this.get(`/fridges/id/${ id }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  createFridge(data, callback) {
    this.post("/fridges", data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  updateFridge(id, data, callback) {
    this.put(`/fridges/${ id }`, data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  deleteFridge(id, callback) {
    this.delete(`/fridges/${ id }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getFridgeItems(userid, callback) {
    this.get(`/fridgeItems/userid/${ userid }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getFridgeItemById(id, callback) {
    this.get(`/fridgeItems/id/${ id }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getCategoryCards(userid, callback) {
    this.get(`/categoryCards/userid/${ userid }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  createFridgeItem(data, callback) {
    this.post("/fridgeItems", data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  createManyFridgeItems(data, callback) {
    this.post("/fridgeItemsMany", data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  updateFridgeItem(id, data, callback) {
    this.put(`/fridgeItems/${ id }`, data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  deleteFridgeItem(id, callback) {
    this.delete(`/fridgeItems/${ id }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }
}
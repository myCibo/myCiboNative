import MainHandler from "./MainHandler";

export default class ShoppingListHandler extends MainHandler {
  constructor() {
    super();
  }

  errorHandler(error) {
    console.error("Error:", error);
  }

  getAllShoppingLists(userid, callback) {
    this.get(`/shoppingLists/userid/${ userid }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getShoppingListById(id, callback) {
    this.get(`/shoppingLists/id/${ id }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  // userid, listname
  createShoppingList(data, callback) {
    this.post("/shoppingLists", data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  // id, listname
  updateShoppingList(id, data, callback) {
    this.put(`/shoppingLists/${ id }`, data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  deleteShoppingList(id, callback) {
    this.delete(`/shoppingLists/${ id }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getShoppingListItems(id, callback) {
    this.get(`/shoppingListItems/listid/${ id }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getShoppingListItem(id, callback) {
    this.get(`/shoppingListItems/id/${ id }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  createShoppingListItem(data, callback) {
    this.post("/shoppingListItems", data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  updateShoppingListItem(id, data, callback) {
    this.put(`/shoppingListItems/${ id }`, data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  deleteShoppingListItem(id, callback) {
    this.delete(`/shoppingListItems/${ id }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }
}
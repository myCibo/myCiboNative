export default class CategoryHandler extends MainHandler {
  constructor() {
    super();
  }

  errorHandler(error) {
    console.error("Error:", error);
  }

  getAllCategories(callback) {
    this.get("/categories", (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getCategoryById(id, callback) {
    this.get(`/categories/id/${id}`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getCategoryByName(name, callback) {
    this.get(`/categories/name/${name}`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  createCategory(data, callback) {
    this.post("/categories", data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  updateCategory(id, data, callback) {
    this.put(`/categories/${id}`, data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  deleteCategory(id, callback) {
    this.delete(`/categories/${id}`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }
}
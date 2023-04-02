import MainHandler from "./MainHandler";

export default class IngredientHandler extends MainHandler {
  constructor() {
    super();
  }

  errorHandler(error) {
    console.error('Error:', error);
  }

  getAllIngredients(callback) {
    this.get('/ingredients', (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getIngredientById(id, callback) {
    this.get(`/ingredients/id/${ id }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getIngredientByName(name, callback) {
    this.get(`/ingredients/name/${ name }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  createIngredient(data, callback) {
    this.post('/ingredients', data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  updateIngredient(id, data, callback) {
    this.put(`/ingredients/${ id }`, data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  deleteIngredient(id, callback) {
    this.delete(`/ingredients/${ id }`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }
}
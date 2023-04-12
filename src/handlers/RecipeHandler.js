import MainHandler from "./MainHandler";

export default class RecipeHandler extends MainHandler {
  constructor() {
    super();
  }

  errorHandler(error) {
    console.error('Error:', error);
  }

  iMadeThis(userid, array, callback) {
    this.put(`/recipes/userid/${ userid }`, array, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }
}
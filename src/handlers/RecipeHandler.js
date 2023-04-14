import MainHandler from "./MainHandler";

export default class RecipeHandler extends MainHandler {
  constructor() {
    super();
  }

  errorHandler(error) {
    console.error('Error:', error);
  }



  iMadeThis(userid, itemsArray, callback) {
    console.log("iMadeThis", userid, itemsArray)
    this.put(`/recipes/userid/${ userid }`, itemsArray, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }
}
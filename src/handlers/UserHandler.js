export default class UserHandler extends MainHandler {
  constructor() {
    super();
  }

  errorHandler(error) {
    console.error("Error:", error);
  }

}
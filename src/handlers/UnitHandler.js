export default class UnitHandler extends MainHandler {
  constructor() {
    super();
  }

  errorHandler(error) {
    console.error("Error:", error);
  }

  getAllUnits(callback) {
    this.get("/units", (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getUnitById(id, callback) {
    this.get(`/units/id/${id}`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  getUnitByName(name, callback) {
    this.get(`/units/name/${name}`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  createUnit(data, callback) {
    this.post("/units", data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  updateUnit(id, data, callback) {
    this.put(`/units/${id}`, data, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }

  deleteUnit(id, callback) {
    this.delete(`/units/${id}`, (error, data) => {
      if (error) {
        this.errorHandler(error);
        return;
      }
      callback(data);
    });
  }
}
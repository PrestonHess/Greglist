import CarController from "./Controllers/CarController.js";
import HouseController from "./Controllers/HouseController.js"

class App {
  carController = new CarController();
  houseController = new HouseController();
}

window["app"] = new App();

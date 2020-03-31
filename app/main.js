import CarController from "./Controllers/CarController.js";
import HouseController from "./Controllers/HouseController.js";
import JobController from "./Controllers/JobController.js";

class App {
  carController = new CarController();
  houseController = new HouseController();
  jobControlloer = new JobController()
}

window["app"] = new App();

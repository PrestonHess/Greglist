import _store from "../store.js"
import House from "../Models/House.js"

class HouseService {
  constructor() {
    console.log('House service works!');
  }

  create(newHouseObj) {
    debugger
    let newHouse = new House(newHouseObj)
    _store.State.house.push(newHouse)
    console.log(newHouse)
  }

  delete(index) {
    _store.State.house.splice(index, 1)
  }
}

const HOUSESERVICE = new HouseService();
export default HOUSESERVICE;
import _store from "../store.js"
import House from "../Models/House.js"

// @ts-ignore axios
let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/houses',
  timeout: 3000
})

class HouseService {
  constructor() {
    this.getHouses();
  }

  getHouses(){
    _api.get()
      .then(res =>{
        let houses = res.data.data.map(house => new House(house));
        _store.commit('houses', houses)
      })
      .catch(err => {
        console.log(err);
      })
  }

  create(newHouseObj) {
    _api.post('', newHouseObj)
      .then(res => {
        let newHouse = new House(res.data.data)
        let houses = [..._store.State.houses, newHouse]
        _store.commit('houses', houses)
      })
      .catch(err => {
        console.log(err);
      })
  }

  delete(houseId) {
    _api.delete(houseId)
      .then(res => {
        this.getHouses()
      })
      .catch(err =>{
        console.log(err);
      })
  }

  bid(houseId) {
    let foundHouse = _store.State.houses.find(house => house.id == houseId);
    if (foundHouse) {
      foundHouse.price += 1000;
      _api.put(houseId, foundHouse)
        .then(res => {
          this.getHouses()
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}

const HOUSESERVICE = new HouseService();
export default HOUSESERVICE;
import Car from "../Models/Car.js"
import _store from '../store.js'

// @ts-ignore axios
let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/cars',
  timeout: 3000
})

class CarService {
  constructor() {
    this.getCars()
  }
  bid(carId) {
    let car = _store.State.cars.find(car => car.id == carId);
    if (car) {
      car.price += 250;
      _api.put(carId, car)
        .then(res => {
          this.getCars();
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
  getCars() {
    _api.get()
    .then(res => {
      let cars = res.data.data.map(carData => new Car(carData));
      _store.commit('cars', cars);
    })
    .catch(err => {
      console.log(err)
    })
  }
  delete(carId) {
    _api.delete(carId)
    .then(res => {
      console.log(res.data);
      //NOTE two ways of handling updating our data
        /*the second way is going and refetching the fresh data set from our database.
        pros: this is going to always be updated to reflect exactly what is in our database at the time.
        cons: This requires two calls to the database, one for our delete, and the second one for our get
        */
       this.getCars();
    })
    .catch(err => {
      console.log(err);
    })
  }
  create(newCarObject) {
    /* NOTE
     RESTful conventions
    C - Create - POST /api/cars
    R - Read - GET /api/cars
    U - Update - PUT /api/cars/:carId
    D - Delete - DELETE /api/cars/:carId
    */
    //POST method always needs a url first, and then the data to create second
    _api.post('', newCarObject)
      .then(res => {
        //NOTE two ways of handling updating our data
        //First way is adding the returned new car we created into our current cars array
        //pros: only one call to db (our post method) cons: we cant trust that our local array contains all the same information as our DB. Someone else could of added a car between our get and post request
        let newCar = new Car(res.data.data)
        let cars = [newCar, ..._store.State.cars]
        _store.commit('cars', cars)
        //NOTE we could just call get cars again and it would handle getting all the cars and saving the state and redrawing.
        // this.getCars()
      })
      .catch(err => console.error(err))
  }
}


const CARSERVICE = new CarService()
export default CARSERVICE
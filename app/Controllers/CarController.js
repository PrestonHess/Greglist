import _carService from '../Services/CarService.js'
import _store from '../store.js'


//NOTE we need the element to put them in, access to the array of cars in the store, blank template to add them to, and a template for how they are displayed
function _drawCars() {
  let template = '<div class="col-12"><h3 class="text-center">Cars Listings</h3></div>'
  let cars = _store.State.cars

  cars.forEach((car, index) => template += car.getTemplate(index))
  document.getElementById("cars").innerHTML = template
}


export default class CarController {
  constructor() {
    _store.subscribe('cars', _drawCars)
  }


  create(event) {
    event.preventDefault() // prevents the page from refreshing
    let formData = event.target
    let newCarObject = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value
    }

    _carService.create(newCarObject)
    formData.reset()
    // @ts-ignore
    $('#add-car-modal').modal('toggle')
  }

  delete(carId) {
    _carService.delete(carId)
  }

  bid(carId){
    _carService.bid(carId)
  }
}
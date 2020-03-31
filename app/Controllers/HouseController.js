import _houseService from '../Services/HouseService.js'
import _store from '../store.js'

function _drawHouses(){
  let template = '<div class="col-12"><h3 class="text-center">House Listings</h3></div>';
  let houses = _store.State.houses;

  houses.forEach(house => template += house.getTemplate());
  document.getElementById('houses').innerHTML = template;
}

export default class HouseController{
  constructor() {
    _store.subscribe('houses', _drawHouses);
  }

  create(event) {
    event.preventDefault() // Prevents from refreshing the page
    let formData = event.target;
    let newHouseObj = {
      location: formData.location.value,
      bathrooms: formData.bathrooms.value,
      bedrooms: formData.bedrooms.value,
      price: formData.price.value,
      year: formData.year.value,
      levels: formData.levels.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value
    }

    _houseService.create(newHouseObj)
    formData.reset()
    // @ts-ignore
    $('#add-house-modal').modal('toggle')
  }

  delete(houseId) {
    _houseService.delete(houseId)
  }

  bid(houseId) {
    _houseService.bid(houseId)
  }

}
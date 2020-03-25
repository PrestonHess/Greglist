import _houseService from '../Services/HouseService.js'
import _store from '../store.js'

function _drawHouses(){
  let template = '';
  let houses = _store.State.house;

  houses.forEach((house, index) => template += house.getTemplate(index));
  document.getElementById('houses').innerHTML = template;
}

export default class HouseController{
  constructor() {
    console.log('House Controller works');
  }

  create(event) {
    event.preventDefault() // Prevents from refreshing the page
    let formData = event.target;
    let newHouseObj = {
      location: formData.location.value,
      bathrooms: formData.bathrooms.value,
      bedrooms: formData.bedrooms.value,
      price: formData.price.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value
    }

    _houseService.create(newHouseObj)
    formData.reset()
    // @ts-ignore
    $('#add-house-modal').modal('toggle')
    _drawHouses()
  }

  delete(index) {
    _houseService.delete(index)
    _drawHouses()
  }

}
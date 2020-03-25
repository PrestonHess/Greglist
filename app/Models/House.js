

export default class House {
  constructor(data) {
    this.location = data.location
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.price = data.price
    this.description = data.description || 'No description provided'
    this.imgUrl = data.imgUrl
  }

  getTemplate(index) {
    return /*html*/ `
    <div class="col-4 border border-info rounded shadow">
      <h2>Price : ${this.price}</h2>
      <h5>Location : ${this.location}</h5>
      <h5>Bedrooms : ${this.bedrooms}</h5>
      <h5>Bathrooms : ${this.bathrooms}</h5>
      <img class="img-fluid" src="${this.imgUrl}" />
      <button class="btn btn-danger btn-block" onclick="app.houseController.delete(${index})">Delete</button>
    </div>`
  }
}


export default class House {
  constructor(data) {
    this.id = data.id || data._id
    this.location = data.location
    this.year = data.year
    this.levels = data.levels
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.price = data.price
    this.description = data.description || 'No description provided'
    this.imgUrl = data.imgUrl
  }

  getTemplate() {
    return /*html*/ `
    <div class="col-4 border border-info rounded shadow">
      <h2>Price : ${this.price}</h2>
      <h5>Location : ${this.location}</h5>
      <h5>Bedrooms : ${this.bedrooms}</h5>
      <h5>Bathrooms : ${this.bathrooms}</h5>
      <h5>Year : ${this.year}</h5>
      <h5>Levels : ${this.levels}</h5>
      <img class="img-fluid" src="${this.imgUrl}" />
      <button class="btn btn-danger btn-block" onclick="app.houseController.delete('${this.id}')">Delete</button>
      <button class="btn btn-success btn-block" onclick="app.houseController.bid('${this.id}')">Bid + $1,000</button>
    </div>`
  }
}
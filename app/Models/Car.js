export default class Car {
  constructor(data) {
    this.id = data.id || data._id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided."
  }

  getTemplate(index) {
    return /*html*/ `
    <div class="col-4 border border-info rounded shadow">
      <h1>Make: ${this.make}</h1>
      <h5>Model: ${this.model}</h5>
      <h5>Year: ${this.year}</h5>
      <h5>Price: ${this.price}</h5>
      <img class="img-fluid" src="${this.imgUrl}" />
      <button class="btn btn-danger btn-block" onclick="app.carController.delete('${this.id}')">Delete</button>
      <button class="btn btn-success btn-block" onclick="app.carController.bid('${this.id}')">Bid + $250</button>
    </div>`
  }


}
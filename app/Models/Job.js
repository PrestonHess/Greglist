
export default class Job {
  constructor(data) {
    this.id = data.id || data._id
    this.company = data.company
    this.jobTitle = data.jobTitle 
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.discription
  }

  get template() {
    return /*html*/`
    <div class="col-4 border border-success rounded shadow">
      <h1>Position : ${this.jobTitle}</h1>
      <h5>Company : ${this.company}</h5>
      <h5>Hours : ${this.hours}</h5>
      <h5>Payrate : ${this.rate}</h5>
      <p>${this.description}</p>
    </div>
    `
  }
}
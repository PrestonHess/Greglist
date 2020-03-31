import _jobService from '../Services/JobService.js';
import _store from '../store.js';
import Job from "../Models/Job.js";

let _drawJobs = function() {
  let template = '<div class="col-12"><h3 class="text-center">Job Listings</h3></div>'
  _store.State.jobs.forEach(job => template += job.template);
  document.getElementById('jobs').innerHTML = template;
}
export default class JobController {
  constructor() {
    _store.subscribe('jobs', _drawJobs)
  }


  create(event) {
    debugger
    event.preventDefault();
    let formData = event.target;
    let newJobObject = {
      company: formData.company.value,
      jobTitle: formData.jobTitle.value,
      hours: formData.hours.value,
      rate: formData.rate.value,
      description: formData.description.value
    }

    _jobService.create(newJobObject)
    formData.reset()
    // @ts-ignore
    $('#add-job-modal').modal('toggle')
  }
}
import _jobService from '../Services/JobService.js';
import _store from '../store.js';

let _drawJobs = function() {
  let template = '<div class="col-12"><h3 class="text-center">Cars Listings</h3></div>'
  _store.State.jobs.forEach(job => template += job.template);
  document.getElementById('jobs').innerHTML = template;
}
export default class JobController {
  constructor() {
    _store.subscribe('jobs', _drawJobs)
  }

  
}
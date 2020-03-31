import _store from "../store.js"
import Job from "../Models/Job.js"

// @ts-ignore axios
let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/jobs',
  timeout: 3000
})

class JobService {
  constructor() {
    this.getCars()
  }

  getCars(){
    _api.get()
      .then(res => {
        let jobs = res.data.data.map(jobData => new Job(jobData))
        _store.commit("jobs", jobs)
      })
      .catch(err => {
        console.log(err);
      })
  }

  create(newJobObject) {
    _api.post('', newJobObject)
      .then(res => {
        let newJob = new Job(res.data.data)
        let jobs = [newJob, ..._store.State.jobs]
        _store.commit('jobs', jobs)
      })
      .catch(err => {
        console.log(err);
      })
  }

}

const JOBSERVICE = new JobService();

export default JOBSERVICE;
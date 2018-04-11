var expect = require("chai").expect
var mongoose = require("mongoose");
var jobModel = require("../public/models/Job");
var Promise = require("bluebird");
var jobsData = require("../jobs-data.js");

function resetJobs(){
  return new Promise(function(resolve,reject){
      mongoose.connection.collections['jobs'].drop(resolve, reject);  
});
}

var connectDB = Promise.promisify(mongoose.connect);


describe("get jobs", function(){
    var jobs;
    
    before(function(done){
         mongoose.connect('mongodb://psdev:psdev@ds235239.mlab.com:35239/jobfinder')
           .then(resetJobs)
           .then(jobModel.seedJobs)
           .then(jobsData.findJobs)
           .then(function(collection){
            jobs = collection;               
          done();
        })
    })
    
    it("should never be empty since jobs are added",function(){
            expect(jobs.length).to.be.at.least(1);
    });
    
    it("should have job with a description",function(){
            expect(jobs[0].description).to.not.be.empty;
    });
       it("should have job with a title",function(){
            expect(jobs[0].title).to.not.be.empty;
    });
    
  });
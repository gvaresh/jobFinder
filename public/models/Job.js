var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title:{type: String},
    description: {type: String}
});

var Job = mongoose.model('Job',jobSchema);

exports.seedJobs = function() {
    Job.find({}).exec(function(error,collection){
       if(collection.length === 0){
         Job.create({title: 'cook', description: 'cook descriptions'});
         Job.create({title: 'waiter', description: 'waiter descriptions'});
         Job.create({title: 'programmer', description: 'programmer descriptions'});
         Job.create({title: 'axe', description: 'axe descriptions'});
         Job.create({title: 'Alestender', description: 'Alestender descriptions'});
       } 
    })
}


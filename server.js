var express = require("express");
var mongoose = require("mongoose");
var jobModel = require("./public/models/Job.js")
var jobsData = require("./jobs-data.js");
var app = express();

app.set('views',__dirname);
app.set("view engine", 'jade');

app.use(express.static(__dirname+'/public'));

app.get('/api/jobs', function(req,res){
    jobsData.findJobs().then(function(collection){
       res.send(collection);
   })
})

app.get('*',function(req,res){
    res.render('index');
});

//mongoose.connect('mongodb://localhost/jobfinder');
mongoose.connect('mongodb://psdev:psdev@ds235239.mlab.com:35239/jobfinder');


var con = mongoose.connection;
con.once('open',function(){
    console.log('connected to mongoDB success')
    jobModel.seedJobs();
});

app.listen(process.env.PORT, process.env.IP);

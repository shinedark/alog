// app/models/log.js

var mongoose = require('mongoose');
// define the schema for our Log model
var logSchema = mongoose.Schema({
        userid       : String,
        log          : String,
        medsq        : String,
        resources    : {type: String, default: "no"},
        created			 : {type: Date, default: Date.now}
});

// create the model for log and expose it to our app
module.exports = mongoose.model('Log', logSchema);
// //app/models/email.js
// // load the things we need
// var cron            = require('node-cron');
// var mongoose        = require('mongoose');
// var nodemailer      = require('nodemailer');
// var openpgpEncrypt  = require('nodemailer-openpgp').openpgpEncrypt;
// var User            = require('./models/user');
// var Log             = require('./models/log');

// var transporter = nodemailer.createTransport('smtps://alogpatient%40gmail.com:Shurra0303@smtp.gmail.com');
// transporter.use('stream', openpgpEncrypt());



// cron.schedule('* * * * 6', function(){
//     // scope variables for storing all users & all logs
//     var users;
//     var logs;

//     // first chain of the promise, get all users
//     User.find({}).exec()
//     .then(function(userResults){
//         // once all users are return, THEN run this block
//         // which stores the userResults in our users variable
//         // console.log(userResults);
//         users = userResults;
//         var d = new Date();
//         d.setDate(d.getDate()-7);
//         console.log('date',d);
//         // now get all Logs, return that result
//         return Log.find({created:{$gte: d}}).exec();
//     })
//     .then(function(logResults){
//         // once all logs are returned, THEN run this block
//         // which stores the logResults in our logs variable
//         // console.log(logResults);
//         logs = logResults;
//         return logResults;
//         // returning logResults because a promise needs to return
//         // someting to continue the chain
//     })
//     .then(function(data){
//         // now loop over every user
//         users.forEach(function(user){
//             // setup mail options
//             var mailOptions = {
//                 from: '"Alog App" <alogpatient@gmail.com>', // sender address 
//                 to: user.email + "," + user.theemail, // list of receivers 
//                 subject: 'Your patient logs', // Subject line  
//                 text: '', // plaintext body 
//                 html: '', // html body 
//                 encryptionKeys: ['aFPiyCa2PHDq']
//             };
//             // variables to store our logs as plaintext & HTML
//             var logText = '';
//             var logHtml = '';
//             // loop over every log
//             logs.forEach(function(log){
//                 // check if log was made by this specific user
//                 if(log.userid == user._id){
//                     // concatenate onto our plaintext & html variables
//                     logText += "\r\n" + log.created + " --- " + log.log + " --- " + "medications" + " --- " + log.medsq + "\r\n";
//                     logHtml += "<p>" + log.created + " --- " + log.log + " --- " + "medications" + " --- " + log.medsq + "</p>";
//                 }
//             });
//             // update mailOptions with our finished email bodies
//             mailOptions.text = logText;
//             mailOptions.html = logHtml;
//             // send mail
            
//             transporter.sendMail(mailOptions, function(error, info){
//                 if(error){
//                     return console.log(error);
//                 }
//                 console.log('Message sent: ' + info.response);
//             });
//         // ends the user loop
//         });
//     }); 
    

//   console.log('running a task every minute');
// });



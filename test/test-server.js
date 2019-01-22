var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

// describe('Logs', function() {
//     it('should create a log on POST', function(done) {
//         chai.request(app)
//             .post('/logs-user')
//             .send({ 'log': 'test 1' })
//             .end(function(err, res) {
//                 should.equal(err, null);
//                 res.should.have.status(201);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('id');
//                 res.body.log.should.be.a('string');
//                 res.body.userid.should.be.a('string');
//                 done();
//             });
//     });
// });
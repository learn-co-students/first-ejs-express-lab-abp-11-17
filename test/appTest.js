'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai')
  , expect = chai.expect

const chaiHttp = require('chai-http');
const app = require('../server');
const sinon = require('sinon');
const ejs = require('ejs');

chai.use(chaiHttp);

describe("app.js", function(){
  describe('/', function(){
    it('responds with a 200', function(done){
      chai.request(app)
        .get("/")
        .end(function(err, res){          
          expect(res).to.have.status(200);
          done();
        });
    });    

    it('renders the index.ejs view', function(done){
      const spy = sinon.spy(ejs, '__express');
      
      
      chai.request(app)
        .get("/")
        .end(function(err, res){
          console.log(res)
          expect(spy.calledWithMatch(/index/)).to.be.true;
          spy.restore();

          done();
        });
    });
  });  
});

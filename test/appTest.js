'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai')
  , expect = chai.expect

const chaiHttp = require('chai-http');
const app = require('../server');
const sinon = require('sinon');

chai.use(chaiHttp);

describe("app.js", function(){
  describe('/', function(){
    it('should render the "index" view', function(done) {
      const spy = sinon.spy(app, 'render');
      
      chai.request(app)
        .get("/")
        .end(function(err, res){
          const viewRendered = spy.getCall(0).args[0];
      
          expect(viewRendered).to.be.eql('index');
      
          spy.restore();
          done()
        });
    })
    
    it('passes an object to the view with a key "welcomePhrase" and value "Hello, World from Express and EJS!"', function(done) {
      const spy = sinon.spy(app, 'render');
      
      chai.request(app)
        .get("/")
        .end(function(err, res){
          const viewData = spy.getCall(0).args[1];
      
          expect(viewData.welcomePhrase).to.be.eql("Hello, World from Express and EJS!");
      
          spy.restore();
          done()
        });
    })

    it('uses embeded <%= %> ejs to output the welcomePhrase in the template"', function(done) {
      // const spy = sinon.spy(app, 'render');
      const fs = require('fs')
      fs.readFile('./views/index.ejs', 'utf8', function (err,data) {
        expect(data).to.contain("<%=");
        expect(data).to.contain("%>");
        expect(data).to.contain("welcomePhrase");
            
        done()
      });          
    })

    it('includes the welcomePhrase in the HTML response of the template"', function(done) {      
      chai.request(app)
        .get("/")
        .end(function(err, res){      
          expect(res.text).to.contain("Hello, World from Express and EJS!");
            
          done()
        });
    })

  });  
});

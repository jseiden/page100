"use strict";


// var chai = require("chai");
// var assert = chai.assert;
// var expect = chai.expect;
// var should = chai.should();

//supertest module removes the need for hard-coded port numbers
var request = require("supertest");
var app = require("./../server/server.js");

describe("Home routes", function(){
  it("return 200 status code from '/' on localhost", function(done){
    request(app).get("/").expect(200, function(err){
      console.log("error: ", err);
    }).end(done);
  });

  it("returns 404 status code from 'elbow' on localhost", function(done){
    request(app).get("/ardvark").expect(404, function(err){
      console.log("error: ", err);
    }).end(done);
  });
});

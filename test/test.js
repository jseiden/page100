"use strict";

var chai = require("chai");
var assert = chai.assert;
// var expect = chai.expect;
// var should = chai.should();

//supertest module removes the need for hard-coded port numbers
var request = require("supertest");
var app = require("./../server/server.js");

describe("Routes tested on local host", function(){
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




describe("Array", function(){
  describe("#indexOf()", function(){
    it("should return -1 when the value is not present", function(){
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    });
    it("should return index when the value is present", function(){
      assert.equal(2, [1, 2, 3].indexOf(3));
      assert.equal(1, [1, 2, 3].indexOf(2));
    });
  });

});

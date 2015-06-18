"use strict";

var chai = require("chai"),
	assert = chai.assert;
	// expect = chai.expect,
	// should = chai.should();

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

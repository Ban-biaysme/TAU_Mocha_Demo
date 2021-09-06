// Test Suite - Mathematical Operations

// Test Cases

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
  // below code is execute the test suite in 500ms and also called suite level timeout
  this.timeout(5000);

    var a = 10;
    var b = 10;

    //below code is called hook level timeout
    // beforeEach(function(done){
    //   this.timeout(500);
    //   setTimeout(done,3000);
    // });


  it('Addition of two numbers', function(){
    var c = a+b;
    assert.equal(c,20);

  });

// below code to run exclusive test that append with .only()
//it.only('Subtraction of two numbers', function(){

//below test will fail because in describe level the time set as 5000s and in test level it set as 3000s. It is also called test level timeout
//it('Subtraction of two numbers', function(done){ 
  it('Subtraction of two numbers', function(){
    // Set.timeout(done, 3000)
      var c = a-b;
      assert.equal(c,0);

    });

  it('Multiplication of two numbers', function(){
    var c = a*b;
    assert.equal(c,100);
  });

  // In the below code .skip() used to skip the test also called inclusive
  //  it.skip('Division of two numbers', function(){
  it('Division of two numbers', function(){
    var c = a/b;
    assert.equal(c,1);
  });

  it('Division of two numbers', function(){
    var c = a%b;
    assert.equal(c,0);
  });

  it('It is a pending test in Mocha');

});
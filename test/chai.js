const chai= require('chai');

//expect
const expect = chai.expect;

// BDD style - should()
const should= chai.should();

//Assert - TDD style
const assert = chai.assert; //no chaining possible

//expect API examples

let a=1;
let b=1;

expect(a).to.be.equals(b, "a and b is not equals");

// above code can rewritten using should
a.should.be.equals(b);

//check whether a is a number
a.should.be.a('number');

// above code can rewritten using assert
assert.equal(a,b, "a and b are not equal");


//object/string/boolean

function myObj(){
    return{
        a :100,
        b : 'Hello'
    }
}

x= new myObj();
y= new myObj();

expect(x).to.be.an("object");

// when we use the below code it will throw error
//bcos .to.be.equals not compare the contents of the object 
//expect(x).to.be.equals(y, "x and y are not equal");

//bcos .to.be.deep.equals cpmpare the contents of the objects 
expect(x).to.be.deep.equals(y, "x and y are not equal");

//chaining expressions
// x is an object and x and y are equal

expect(x).to.be.an("object").and.to.be.deep.equals(y,"x and y are not equal");

//should - chaining expressions
(x).should.be.an('object').and.to.be.deep.equals(y);

// assert for object comparism 
assert.deepEqual(x,y, "x and y are not equal");

//array
let numbers = [1,2,3,0];

//below code check whether the number is present in the array or not
expect(numbers).to.be.an('array').that.includes(3);


// BDD style: should with array
(numbers).should.be.an('array').that.includes(3);


// TDD style: assert with array
assert.isArray(numbers, "Number is not an array");


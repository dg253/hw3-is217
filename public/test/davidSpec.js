var expect = require("chai").expect;
var tags = require("../lib/david.js");
 
describe("Math", function(){
   describe("#addition()", function(){	
       it("should add two positive numbers", function(){
           var x = 5,y = 10;
           var results = tags.add(x,y);
 
           expect(results).to.equal(15);
       });
       it("add negative and positive number", function(){
           var x = 5,y = -10;
           var results = tags.add(x,y);
 
           expect(results).to.equal(-5);
       });
       it("add two negative numbers", function(){
           var x = -5,y = -10;
           var results = tags.add(x,y);
 
           expect(results).to.equal(-15);
       });
   });

   describe("#subtraction()", function(){	
       it("should subtract two positive numbers", function(){
           var x = 5,y = 10;
           var results = tags.subtract(x,y);
 
           expect(results).to.equal(-5);
       });
       it("subtract negative and positive number", function(){
           var x = 5,y = -10;
           var results = tags.subtract(x,y);
 
           expect(results).to.equal(15);
       });
       it("subtract two negative numbers", function(){
           var x = -5,y = -10;
           var results = tags.subtract(x,y);
 
           expect(results).to.equal(5);
       });
   });
   
   describe("#multiplication()", function(){	
       it("should multiply two positive numbers", function(){
           var x = 5,y = 10;
           var results = tags.multiply(x,y);
 
           expect(results).to.equal(50);
       });
       it("multiply negative and positive number", function(){
           var x = 5,y = -10;
           var results = tags.multiply(x,y);
 
           expect(results).to.equal(-50);
       });
       it("multiply two negative numbers", function(){
           var x = -5,y = -10;
           var results = tags.multiply(x,y);
 
           expect(results).to.equal(50);
       });
   });

   describe("#division()", function(){	
       it("should divide two positive numbers", function(){
           var x = 5,y = 10;
           var results = tags.divide(x,y);
 
           expect(results).to.equal(.5);
       });
       it("divide negative and positive number", function(){
           var x = 5,y = -10;
           var results = tags.divide(x,y);
 
           expect(results).to.equal(-.5);
       });
       it("divide two negative numbers", function(){
           var x = -5,y = -10;
           var results = tags.divide(x,y);
 
           expect(results).to.equal(.5);
       });
   });
});
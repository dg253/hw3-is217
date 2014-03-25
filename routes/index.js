/*
 * GET home page.
 */
var tags = require('../public/lib/david.js');

exports.index = function(req, res){
  res.render('index', { title: 'Calculator'
			});
};

exports.calculator = function(req, res){
  var userCalculation = String(req.query.calculation);
  var userX = Number(req.query.x);
  var userY = Number(req.query.y);
  var results;
  
  console.log("Calculation chosen is: " + userCalculation);
  console.log("1st number is: " + userX);
  console.log("2nd number is: " + userY);
  
  
  if(userCalculation == "add"){
  	results = tags.add(userX,userY);
  }else if(userCalculation == "subtract"){
  	results = tags.subtract(userX,userY);
  }else if(userCalculation == "multiply"){
  	results = tags.multiply(userX,userY);
  }else{
  	results = tags.divide(userX,userY);
  };
  
  console.log("The answer is: " + results);
  
  res.render('calculator', { title: 'Calculator'
  							, calculation: userCalculation
  							, x: userX
  							, y: userY
  							, answer: results
  							});
};
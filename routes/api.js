/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initUnit = convertHandler.getUnit(input); // function to get unit from input string
      var initNum = convertHandler.getNum(input); // function to get number from input string. 2.5/6 = 0.416667, 5.4/3 = 1.8, 1.1/2 = 0.55
      var returnNum = convertHandler.convert(initNum, initUnit); // function to get converted number
      var returnUnit = convertHandler.getReturnUnit(initUnit); // function to get imperial unit
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit); // function to get the string (of the sentence)
      returnNum === "invalid" ? "invalid" : Math.round(returnNum * 100000) / 100000;
      res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString});
    });
    
};

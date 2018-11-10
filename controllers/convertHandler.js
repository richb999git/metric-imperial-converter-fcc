/*
*
*
*       Complete the handler logic below
*       
*       
*/ // Richard Braunton

function ConvertHandler() {
  
  this.getNum = function(input) {
    // search from right of input string until a number is found
    // take those letters as the unit
    var result = "invalid number";
    var inputPos = input.length - 1;
    if (input.length !== 0) { 
      while (inputPos >= 0 ) {
        if (input.charAt(inputPos).match(/[^A-Za-z]/)) {
          // reached end of unit
          break;
        } 
        inputPos--;
      }
      inputPos++;
      result = input.substring(0, inputPos);
      if (result === "") { result = "1";} // "1" so it is a string so the regex match doesn't cause error
      // test if result is valid
        // check result contains only 1 "/"
        if (result.match(/\/.*\//)) { result = "invalid number"; } // test for more than one "/"
        else {
          try {
            result = eval(result);
          }
          catch(err) {
            //result cannot be evaluated so catch the error
            result = "invalid number";
          }
        }    
    }
    return result;
  }
  
  
  this.getUnit = function(input) {
    // search from right of input string until a number is found
    // take those letters as the unit
    var result = "invalid unit";
    var inputPos = input.length - 1;
    if (input.length !== 0) { 
      while (inputPos >= 0 ) {
        if (input.charAt(inputPos).match(/[^A-Za-z]/)) {
          // reached end of unit
          break;
        } 
        inputPos--;
      }
      inputPos++;
      result = input.substring(inputPos, input.length);
      // test if result is valid
      var resultLower = result.toLowerCase();
      if (resultLower === "l" || resultLower === "gal" || resultLower === "mi" || resultLower === "km" || resultLower === "lbs" || resultLower === "kg"){
        // ok
      } else result = "invalid unit";      
    }
    return result;        // lowercase?
  };
  
  this.getReturnUnit = function(initUnit) {
    var result = "invalid";
    initUnit = initUnit.toLowerCase();
    if (initUnit === "l") {result = "gal";}
    else if (initUnit === "gal") {result = "l";}
    else if (initUnit === "mi") {result = "km";}
    else if (initUnit === "km") {result = "mi";}
    else if (initUnit === "lbs") {result ="kg";}
    else if (initUnit === "kg") {result ="lbs";}
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result = "invalid";  // default
    unit = unit.toLowerCase();
    if (unit === "l") {result = "litres";}
    else if (unit === "gal") {result = "gallons";}
    else if (unit === "mi") {result = "miles";}
    else if (unit === "km") {result = "kilometers";}
    else if (unit === "lbs") {result ="pounds";}
    else if (unit === "kg") {result ="kilograms";}
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result = "invalid"; // default
    initUnit = initUnit.toLowerCase();
    if (initNum !== "invalid number") {
      if (initUnit === "l") {result = initNum / galToL;}
      else if (initUnit === "gal") {result = initNum * galToL;}
      else if (initUnit === "mi") {result = initNum * miToKm;}
      else if (initUnit === "km") {result = initNum / miToKm;}
      else if (initUnit === "lbs") {result = initNum * lbsToKg;}
      else if (initUnit === "kg") {result = initNum / lbsToKg;}
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initNum === "invalid number" && initUnit === "invalid unit") { result = "invalid number and unit"; }
    else if (initNum === "invalid number") { result = "invalid number"; }
    else if (initUnit === "invalid unit") { result = "invalid unit"; }
    else {result = initNum + " " +  this.spellOutUnit(initUnit) + " converts to " + Math.round(returnNum * 100000) / 100000 + " " + this.spellOutUnit(returnUnit);}
    return result;
  };
  
}

module.exports = ConvertHandler;

/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input), 32, "32L should get 32"); // written by fcc
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '32.5L';
      assert.equal(convertHandler.getNum(input), 32.5);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '4/2lbs';
      assert.equal(convertHandler.getNum(input), 2);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '4.2/2lbs';
      assert.equal(convertHandler.getNum(input), 2.1);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = "3/4/5";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = "3nh3";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = "34hr";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]); //////////written by fcc
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','litres','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [10, 'L'];
      var expected = 2.64172;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.01); //0.01 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [10, 'mi'];
      var expected = 16.0934;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.01); //0.01 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [200, 'km'];
      var expected = 124.2745;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [55, 'lbs'];
      var expected = 24.94756;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.01); //0.01 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [35.4, 'kg'];
      var expected = 78.0437;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.01); //0.01 tolerance
      done();
    });
    
  });

});
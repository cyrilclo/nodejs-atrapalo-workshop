var chai = require('chai');
var app = require('../server');
var request = require("request");

chai.config.includeStack = true;

global.app = app;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.request = request;
global.assert = chai.assert;


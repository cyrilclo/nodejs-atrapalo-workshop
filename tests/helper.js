process.env.NODE_PATH = __dirname + '/..';
require('module').Module._initPaths();

let chai = require('chai') ;
let app = require('../server');
//let request = require("request");

chai.config.includeStack = true;

global.app = app;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
//global.request = request;
global.assert = chai.assert;
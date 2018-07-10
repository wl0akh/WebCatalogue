var assert = require('assert');
describe('Be welcome to Mocha', function() {
 it('with a failing test', function() {
var validator = new Validator();
 assert.deepEqual(validator.validate(0), ['error.nonpositive']);
 });
});

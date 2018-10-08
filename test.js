
'use strict';

var test = require('tape');
var primes = require('./primes');

test('Demonstrate ok', function (t) {

  t.ok([], 'Does');

  t.end();

});

test('Demonstrate prime', function (t) {
  t.plan(3);
  t.ok(primes.isPrime(2), '2 is a prime number');
  t.notOk(primes.isPrime(4), '4 is not a prime number');
  t.end();
});
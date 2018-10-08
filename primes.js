function primelist(num) {
  let res = [];
  for (let i = 2; i <= num; i++)
    if (isPrime(i)) res.push(i);
  return res;
}

function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++)
    if (n % i == 0) return false;
  return true;
}

module.exports = { primelist, isPrime };
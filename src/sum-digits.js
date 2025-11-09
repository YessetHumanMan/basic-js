function getSumOfDigits(n) {
  let s = n;
  while (s >= 10) {
    let t = 0;
    while (s > 0) { t += s % 10; s = Math.floor(s / 10); }
    s = t;
  }
  return s;
}

module.exports = { getSumOfDigits };


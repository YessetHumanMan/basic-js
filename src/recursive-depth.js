class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let max = 1;
    for (const el of arr) {
      if (Array.isArray(el)) {
        max = Math.max(max, 1 + this.calculateDepth(el));
      }
    }
    return max;
  }
}

module.exports = { depthCalculator: new DepthCalculator() };


function getDNSStats(domains) {
  const res = {};
  for (const d of domains) {
    const parts = d.split('.').reverse();
    let key = '';
    for (const p of parts) {
      key = key + '.' + p;
      res[key] = (res[key] || 0) + 1;
    }
  }
  return res;
}

module.exports = { getDNSStats };


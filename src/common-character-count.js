function getCommonCharacterCount(s1, s2) {
  const c1 = new Map();
  for (const ch of s1) c1.set(ch, (c1.get(ch) || 0) + 1);
  let common = 0;
  for (const ch of s2) {
    const n = c1.get(ch) || 0;
    if (n > 0) { common++; c1.set(ch, n - 1); }
  }
  return common;
}

module.exports = { getCommonCharacterCount };


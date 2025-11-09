function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const letters = members
    .filter((m) => typeof m === 'string')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s[0].toUpperCase())
    .sort();
  return letters.join('');
}

module.exports = { createDreamTeam };


function renameFiles(names) {
  const used = new Map();
  const out = [];

  for (const name of names) {
    if (!used.has(name)) {
      used.set(name, 1);
      out.push(name);
    } else {
      let k = used.get(name);
      let newName = `${name}(${k})`;
      while (used.has(newName)) {
        k++;
        newName = `${name}(${k})`;
      }
      used.set(name, k + 1);
      used.set(newName, 1);
      out.push(newName);
    }
  }
  return out;
}

module.exports = { renameFiles };


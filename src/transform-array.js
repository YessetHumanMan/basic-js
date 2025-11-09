function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const res = [];
  let skipNext = false;

  for (let i = 0; i < arr.length; i++) {
    if (skipNext) { skipNext = false; continue; }

    const cur = arr[i];
    switch (cur) {
      case '--discard-next':
        if (i + 1 < arr.length) skipNext = true;
        break;
      case '--discard-prev':
        if (res._deletedPrev !== true && res.length) res.pop();
        break;
      case '--double-next':
        if (i + 1 < arr.length) res.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (res._deletedPrev !== true && res.length) res.push(res[res.length - 1]);
        break;
      default:
        res.push(cur);
        break;
    }
    res._deletedPrev = (cur === '--discard-next');
  }

  delete res._deletedPrev;
  return res;
}

module.exports = { transform };


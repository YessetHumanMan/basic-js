function repeater(str, options = {}) {
  str = String(str);
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 0,
    additionSeparator = '|',
  } = options;

  const addStr = additionRepeatTimes > 0
    ? Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator)
    : String(addition);

  return Array(repeatTimes).fill(str + addStr).join(separator);
}

module.exports = { repeater };


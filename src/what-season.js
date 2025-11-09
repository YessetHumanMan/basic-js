function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';

  if (!(date instanceof Date)) throw new Error('Invalid date!');
  if (Object.getOwnPropertyNames(date).length) throw new Error('Invalid date!');
  if (Number.isNaN(date.getTime())) throw new Error('Invalid date!');

  const month = date.getMonth(); // 0..11
  if (month === 11 || month <= 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  return 'autumn';
}

module.exports = { getSeason };


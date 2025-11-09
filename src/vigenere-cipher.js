class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  _ensure(msg, key) {
    if (msg === undefined || key === undefined) throw new Error('Incorrect arguments!');
  }

  _proc(message, key, mode) {
    const A = 'A'.charCodeAt(0);
    const m = String(message).toUpperCase();
    const k = String(key).toUpperCase();

    let res = '';
    let ki = 0;

    for (let i = 0; i < m.length; i++) {
      const ch = m[i];
      if (ch >= 'A' && ch <= 'Z') {
        const mi = ch.charCodeAt(0) - A;
        const kj = k[ki % k.length];
        const kiVal = kj.charCodeAt(0) - A;
        const val = mode === 'enc'
          ? (mi + kiVal) % 26
          : (mi - kiVal + 26) % 26;
        res += String.fromCharCode(A + val);
        ki++;
      } else {
        res += ch;
      }
    }

    return this.direct ? res : res.split('').reverse().join('');
  }

  encrypt(message, key) {
    this._ensure(message, key);
    return this._proc(message, key, 'enc');
  }

  decrypt(message, key) {
    this._ensure(message, key);
    return this._proc(message, key, 'dec');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};


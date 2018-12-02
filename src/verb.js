const Noun = require('./noun');

class Verb {
  constructor({
    verb,
    subject,
    directObject=null,
    indirectObject=null,
    tense="pres"
  }) {
    this.verb = verb;
    this.subject = subject;
    this.directObject = directObject;
    this.indirectObject = indirectObject;
    this.tense = tense;
  }

  getEnding() {
    typeOne = this.verb.match(/(ten)$/);
    typeTwo = this.verb.match(/(en)$/);
    typeThree = this.verb.match(/(er|el)$/);
  }

  conjugate() {
    const enBank = {
      'er': 't'
    }

    const conjugatedEnding = enBank[this.subject.conjugationKey];
    const stem = this.verb.slice(0, this.verb.match(/(en)$/).index);

    return stem + conjugatedEnding;
  }

  print() {
    const directObject = this.directObject ? new Noun({
      root: this.directObject,
      fall: 'akk',
    }) : null;

    const output = `${this.subject.print()} ${this.conjugate()} ${directObject.print()}.`

    return output;
  }

}

module.exports = Verb;

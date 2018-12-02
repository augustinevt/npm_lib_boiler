const Noun = require('./noun.js');
const Verb = require('./verb.js');

const man = new Noun({
  root: 'der man',
  conjugationKey: 'er'
});

const verb = new Verb({
  verb: 'machen',
  subject: man,
  directObject: 'der Kuchen'
});

console.log(verb.print())

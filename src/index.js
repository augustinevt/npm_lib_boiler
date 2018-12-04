const fs = require('fs');
const yml = require('yamljs');

const WATCH_TARGET = './input.yml';

const nouns = {};

const addNoun = (opts) => {
  console.log('adding noun with options:', opts)
  nouns[opts.name] = opts;
  return `${opts.name}`
}

const getNoun = (opts) => {
  console.log('you retreived this noun!!', nouns[opts.name]);
  return `${opts.name}`
}

const bank = {
  addNoun,
  getNoun
}

function* generator(i) {
  yield i;
  yield i + 10;
  return "food!"
}

fs.watchFile(WATCH_TARGET, (eventType, filename) => {
  const jsonOutput = yml.load('./input.yml');
  let gen = null;
  let textOutput;

  const cmd = jsonOutput.cmd;
  const opts = jsonOutput.opts;

  if (cmd === 'gen') {
    gen = generator(10);
  }

  console.log(gen)

  try {
    if (!!gen) {

      // don't CALL NEXT!! HAHA
      textOutput = gen.next()
      if (gen.next.done) {
        gen = null;
      }

    } else {
      textOutput = bank[cmd](opts);
    }

  } catch (e) {
    textOutput =`\n\n -------- \n ${e}`
  }

  fs.writeFile('./output.txt', textOutput, (err) => {
    if (err) throw err;
    console.log('text file saved!')
  });
});

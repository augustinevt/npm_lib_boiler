const fs = require('fs');
const yml = require('yamljs');

const WATCH_TARGET = './input.yml';

fs.watchFile(WATCH_TARGET, (eventType, filename) => {
  const jsonOutput = yml.load('./input.yml');
  let textOutput = '';

  for(let sectionName in jsonOutput.content) {
    console.log(sectionName)
    const section = jsonOutput.content[sectionName];
    textOutput +=
`${section.intro} ${section.context} ${section.substantiation} ${section.analysis} ${section.conclusion}\n\n`
  };

  fs.writeFile('./output.json', JSON.stringify(jsonOutput), (err) => {
    if (err) throw err;
    console.log('json file saved!')
  });

  fs.writeFile('./output.txt', textOutput, (err) => {
    if (err) throw err;
    console.log('text file saved!')
  });
});

const nominative = {
  "f": "e",
  "m": "",
  "n": "",
  "p": "e",
};
const akkusative = {
  "f": "e",
  "m": "en",
  "n": "",
  "p": "e",
};
const dative = {
  "f": "er",
  "m": "em",
  "n": "em",
  "p": "en",
};
const genetive = {
  "f": "er",
  "m": "es",
  "n": "es",
  "p": "er",
};
const bank = {
  nominative,
  akkusative,
  dative,
  genetive,
}

const declinePosessivePronoun = (root, gender, fall) => {
  let result;
  let fallBank;
  let ending;

  try {
    fallBank = bank[fall]
  } catch (e) {
    result = `${fall} is not a recognized fall`;
  }

  try {
    ending = fallBank[gender];
  } catch (e) {
    result = `${gender} is not a recognized gender`;
  }

  result = root + ending;

  return result;
}

export default declinePosessivePronoun;

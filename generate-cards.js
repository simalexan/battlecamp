const util = require('util');
const fs = require('fs');

const CARDS_DATA = 'src/cards.json';
const CARD_TEMPLATE = 'src/card-template.svg',
  OUTPUT = 'cards';

const readFile = util.promisify(fs.readFile),
  writeFile = util.promisify(fs.writeFile),
  rename = util.promisify(fs.rename);

async function readCards() {
  const cardsResponse = await readFile(CARDS_DATA, 'utf8');
  return JSON.parse(cardsResponse);
}

async function replaceCardData(fileContents, args, card) {
  let replacedContents = fileContents;
  args.forEach(argumentName => {
    const argumentSearch = `{{${argumentName}}}`;
    replacedContents = replacedContents.replace(new RegExp(argumentSearch, 'g'), card[argumentName]);
  });
  return replacedContents;
}

async function generateCard(card, template, index, output){
  if (index < 10) index = `0${index}`;
  const fileName = `${output}/${index}-${card.title.toLowerCase().replace(new RegExp(' ', 'g'), '-')}.svg`;
  let cardContents = await replaceCardData(template, Object.keys(card), card);
  let tmpfile = `${fileName}.jstmpreplace`;
  await writeFile(tmpfile, cardContents, 'utf8');
  await rename(tmpfile, fileName);
}

async function generateCards(){
  const cards = await readCards();
  const template = await readFile(CARD_TEMPLATE, 'utf8');
  cards.forEach(async (card, index) =>{
    return await generateCard(card, template, index+1, OUTPUT)
  });
  return true;
};

generateCards();

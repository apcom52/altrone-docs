function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const openRandomBooster = () => {
  let result = {
    type: 'none',
    rarity: 0,
    value: 0
  }

  if (Math.random() < 0.25) {
    result.type = 'card';

    const cardRarityChance = Math.random();
    if (cardRarityChance < 0.8) {
      result.rarity = 0;
    } else if (cardRarityChance >= 0.8 && cardRarityChance < 0.98) {
      result.rarity = 1;
    } else {
      result.rarity = 2;
    }
  } else {
    result.type = 'tokens';

    const cardRarityChance = Math.random();
    if (cardRarityChance < 0.6) {
      result.rarity = 0;
      result.value = randomIntFromInterval(5, 25);
    } else if (cardRarityChance >= 0.6 && cardRarityChance < 0.9) {
      result.rarity = 1;
      result.value = randomIntFromInterval(35, 50);
    } else {
      result.rarity = 2;
      result.value = randomIntFromInterval(75, 150);
    }
  }

  return result;
}

let commonCards = 0;
let rareCards = 0;
let superRareCards = 0;

let tokens = 0;

for (let index = 0; index < 84; index++) {
  for (let reward = 0; reward < 3; reward++) {
    const iteration = openRandomBooster();
    const start = `[${index + 1}]: ${iteration.type === 'card' ? 'Card' : 'Tokens'}`;
    let end = ''

    if (iteration.type === 'card') {
      if (iteration.rarity === 0) {
        end = 'Common Card';
        commonCards++;
      }

      if (iteration.rarity === 1) {
        end = '🔹 Rare Card';
        rareCards++;
      }

      if (iteration.rarity === 2) {
        end = '💠 Super Rare Card';
        superRareCards++;
      }
    } else {
      if (iteration.rarity === 0) {
        end = 'Basic token reward: ' + iteration.value;
      }

      if (iteration.rarity === 1) {
        end = 'Improved token reward: ' + iteration.value;
      }

      if (iteration.rarity === 2) {
        end = 'Rare token reward: ' + iteration.value;
      }

      tokens += iteration.value;
    }

    console.log(`${start}: ${end}`)
  }
  console.log('__________');
}

console.log('> Total cards', commonCards + rareCards + superRareCards);
console.log('> Common cards', commonCards);
console.log('> Rare cards', rareCards);
console.log('> Super rare cards', superRareCards);
console.log('> Tokens', tokens);
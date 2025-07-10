console.log("-----PART 1 Code-----");
const scores = {
  Ricky: 0,             
  Bob: 0,
  Alex: 0,

};

const rickyScore = scores['Ricky'];
console.log("Ricky's Score:", rickyScore);

const bobScore = scores['Bob'];
console.log("Bob's Score:", bobScore);

const alexScore = scores['Alex'];
console.log("Alex Score:", alexScore);


const playerNames = Object.keys(scores);
console.log("Player Names:", playerNames);

const playerScores = Object.values(scores);
console.log("Player Scores:", playerScores);

scores.Ricky += 10;
console.log("Updated Alice Score:", scores.Ricky);

scores['Bob'] += 9;
console.log("Updated Alex Score:", scores['Bob']);

scores['Alex'] += 5;
console.log("Updated Alex Score:", scores['Alex']);
// Final scores object:
console.log("Final Scores Object:", scores);

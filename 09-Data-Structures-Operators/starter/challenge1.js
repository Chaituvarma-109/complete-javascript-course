const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;
console.log(players1, players2);
const [gk1, ...fieldPlayers1] = players1;
console.log(gk1, fieldPlayers1);
const [...allPlayers] = [...players1, ...players2];
console.log(allPlayers);
const [...players1Finals] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Finals);
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
const printGoals = function (...players) {
  console.log(`${players.length} goals scored`);
};
const playersArr = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
printGoals(...playersArr);
console.log(team1 < team2 && `team1 is more likely to win the match`);

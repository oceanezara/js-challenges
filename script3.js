"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// exercice 1, tâche 1: Créer un tableau de joueurs pour chaque équipe (variables ‘players1’ et ‘players2’).

const players1 = game.players[0];
console.log(players1);

const players2 = game.players[1];
console.log(players2);

// exercice 1, tâche 2: Le premier joueur dans un tableau de joueurs est le gardien et les autres sont des joueurs de terrain. Pour l’équipe 1 (le Bayern de Munich), créer une variable ‘gk’ avec le nom du gardien et un tableau ‘fieldPlayers’ avec le reste des joueurs de l’équipe.

const gk = game.players[0][0];
console.log(gk);

const fieldPlayers = players1.shift();
console.log(players1);

// exercice 1, tâche 3:  Créer un tableau ‘allPlayers’ qui contient les joueurs de chaque équipe (22 joueurs).

const allPlayers = players1.concat(players2);
console.log(allPlayers);

// exercice 1, tâche 4: Pendant le match, le Bayern utilise 3 joueurs remplaçants. Créer un autre tableau ‘players1Final’ contenant tous les joueurs de l’équipe originelle ainsi que ‘Thiago’ ‘Coutinho’ et ‘Perisic’.

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// exercice 1, tâche 5: Basé sur l’objet game.odds, créer une variable pour chaque probabilité (appelés ‘team1’, ‘draw’ et ‘team2’).

let team1 = game.odds.team1;
console.log(team1);

let draw = game.odds.x;
console.log(draw);

let team2 = game.odds.team2;
console.log(team2);

// exercice 1, tâche 6: Écrire une fonction ‘printGoals’ qui prend un nombre arbitraire de joueurs et qui écrit chacun d’eux dans la console , ainsi que le nombre total de buts.

let randomNumberOfPlayers = 10;
let totalScore = 0;

function printGoals() {
  const allPlayersFinal = players1Final.concat(players2);
  // Shuffle array
  const shuffled = allPlayersFinal.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, randomNumberOfPlayers);

  console.log(selected);

  for (let i = 0; i <= selected.length; i++) {
    if (selected[i] === "Lewandowski") {
      totalScore = totalScore + 2;
      console.log("Lewandowski a marqué 2 buts");
    } else if (selected[i] === "Gnarby") {
      totalScore = totalScore + 1;
      console.log("Gnarby a marqué 1 but");
    } else if (selected[i] === "Hummels") {
      totalScore = totalScore + 1;
      console.log("hummels a marqué 1 but");
    }
  }
  if (totalScore === 1)
    console.log(
      "Au total " +
        totalScore +
        " but a été marqué par l'un des joueurs sélectionnés au hasard"
    );
  else if (totalScore > 1)
    console.log(
      "Au total " +
        totalScore +
        " buts ont été marqués par les joueurs sélectionnés au hasard"
    );
  else {
    console.log("Aucun but marqué par les joueurs sélectionnés au hasard");
  }
}

printGoals();

// exercice 1, tâche 7: L’équipe avec la probabilité la plus basse est celle la plus susceptible de gagner. Écrire dans la console quelle équipe a le plus de chance de gagner.

function favoriteTeam() {
  if (team1 < team2) {
    console.log(game.team1 + " are the favorite");
  } else if (team1 > team2) {
    console.log(game.team2 + " are the favorite");
  } else {
    console.log("There is no favorite");
  }
}

favoriteTeam();

// exercice 2, tâche 1: Faire une boucle sur le tableau game.scored et afficher dans la console chaque nom de butteur ainsi que le numéro du but : (Exemple : “But 1 : Lewanoski”).

function displayEachScorer() {
  let but = 0;
  for (var i = 0; i < game.scored.length; i++) {
    but += 1;
    console.log(`But ${but} : ${game.scored[i]}`);
  }
}
displayEachScorer();

// exercice 2, tâche 2: Faire une boucle qui calcule la moyenne des probabilités et l’écrire dans la console.

let arrayOdds = [team1, draw, team2];

let totalOdds = 0;
for (var i = 0; i < arrayOdds.length; i++) {
  totalOdds += arrayOdds[i];
}
var avg = totalOdds / arrayOdds.length;

console.log(avg);

/* exercice 2, tâche 3: Afficher les 2 probabilités dans la console, mais dans un joli format comme ceci :
Probabilité de victoire pour Bayern Munich : 1,33
Probabilité d’égalité : 3,25
Probabilité de victoire de Borussia Dortmund : 6,5
Bien récupérer les noms des équipes depuis l’objet ‘game’, ne pas les “hardcoder”.
*/

function displayOdds() {
  console.log(`Probabilité de victoire pour ${game.team1} : ${team1}`);
  console.log(`Probabilité d'égalité : ${draw}`);
  console.log(`Probabilité de victoire pour ${game.team2} : ${team2}`);
}

displayOdds();

// exercice 2, tâche 4: Créer un objet appelé ‘scorers’ qui contient le nom des joueurs qui ont marqué en propriété et le nombre de buts qu’ils ont marqué en value.

const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};

// exercice 3, tâche 1: Créer un tableau ‘events’ des différents évènements qui se sont déroulés (pas de doublon !).

const gameEvents = [
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
];

const events = ["⚽ GOAL", "🔁 Substitution", "🟨 Yellow card"];

// exercice 3, tâche 2: Après que le jeux soit fini, on a décidé que le carton jaune de la minute 64 n’était pas juste, Le supprimer du log d’évènements.

const gameEventsLessMinute64 = gameEvents.filter(function (gameEvents) {
  return gameEvents[0] != 64;
});

console.log(gameEventsLessMinute64);

// exercice 3, tâche 3: Calculer et afficher ce texte dans la console : “Un évènement est apparu en moyenne toutes les 9 minutes”. (Un jeu de foot dure 90 minutes).

const gameEventsGetTime = [];

for (var k in gameEventsLessMinute64)
  gameEventsGetTime.push(gameEventsLessMinute64[k][0]);

console.log(gameEventsGetTime);

const averageDelta = ([x, ...xs]) => {
  if (x === undefined) return NaN;
  else
    return (
      xs.reduce(([acc, last], x) => [acc + (x - last), x], [0, x])[0] /
      xs.length
    );
};

console.log(
  " Un évènement est apparu en moyenne toutes les " +
    Math.ceil(averageDelta(gameEventsGetTime)) +
    " minutes."
);

// exercice 3, tâche 4: Faire une boucle sur ‘gameEvents’ et afficher pour chaque élément dans la console s’il s’est déroulé dans la première ou deuxième moitié du jeu :[PREMIÈRE MOITIÉ] 17 . ⚽️ GOAL

for (let i = 0; i < gameEventsGetTime.length; i++) {
  if (gameEventsGetTime[i] < 45) {
    console.log("PREMIÈRE MOITIÉ: " + gameEventsLessMinute64[i]);
  } else {
    console.log("DEUXIÈME MOITIÉ: " + gameEventsLessMinute64[i]);
  }
}

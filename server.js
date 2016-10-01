'use strict';

// Solution to Drill 2
// ===================

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const TEAMS = {
  red: 0,
  blue: 0
};

const PLAY_TO = 100;


const getMaxVal = () => Math.floor(Math.random() * 100) + 1;

let maxVal = getMaxVal();

// intentional side effects to mutate `maxVal` in global scope
const nextMaxVal = () => maxVal = getMaxVal();

// if player added <= currentMax, team they chose's score 
// incremented by `newPoints`, otherwise they loose `newPoints`
const doGameRound = (teams, team, newPoints, currentMax) => {
  const netPoints = newPoints > currentMax ? -newPoints : newPoints;
  teams[team] += netPoints;
  nextMaxVal();
  return Object.assign(teams, {playTo: PLAY_TO});
};


app.use(express.static('public'));
app.get("/", (req, res) => res.sendFile(__dirname + 'index.html'));


app.post('/strike', (req, res) => {
  const {team, points} = req.body;
  res.status(201).json(doGameRound(TEAMS, team, points, maxVal)).end();
});

app.get('/score', (req, res) => res.json(TEAMS).end());


// listen for requests :)
app.listen(process.env.PORT, () => console.log(`Your app is listening on port ${process.env.PORT}`));


// first to 100 wins
// there's always a var between 1 and 100 that is max you can increment score by
// if you exceed it, you 
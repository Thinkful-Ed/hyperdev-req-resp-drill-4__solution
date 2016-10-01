'use strict';

var doRoundEndpoint = '/strike';
var SCORE_ENDPOINT = '/score';
var CONTROL_ELEMENT = '#js-game-control';

function doGetScore() {
  $.getJSON(SCORE_ENDPOINT, function(data) {
    console.log(data);
  });
}

function doGameRound(team, amount) {
  $.post();
  // if one team has one
}

function watchGameControls() {
  $(CONTROL_ELEMENT).submit(function(event) {
    event.preventDefault();
    // get team value
    // get point value
    var team, amount;
    doGameRound(team, amount);
  })
}


$(function(){
  doGetScore();
  watchGameControls();
});

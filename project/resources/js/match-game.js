var MatchGame = {};

$(document).ready(function() {
  renderCards();
  /*
    Sets up a new game after HTML document has loaded.
    Renders a 4x4 board of cards.
  */

  /*
    Generates and returns an array of matching card values.
   */

  MatchGame.generateCardValues = function () {
    var inOrder = [];
    var cardValues = [];
    var count = 0;
    for (var i = 1; i < 9; i++) {
      inOrder.push(i);
      inOrder.push(i);
    };
    while (inOrder.length) {
      var randomValue = inOrder[Math.floor(inOrder.length * Math.random())];
      var index = inOrder.indexOf(randomValue);
      cardValues.push(randomValue);
      inOrder.splice(index, 1);
      count++;
    }
    return cardValues;
  };

  /*
    Converts card values to jQuery card objects and adds them to the supplied game
    object.
  */

  MatchGame.renderCards = function(cardValues, $game) {
    var cardColors = ['hsl(25, 85%, 65%)','hsl(55, 85%, 65%)','hsl(90, 85%, 65%)','hsl(160, 85%, 65%)','hsl(220, 85%, 65%)','hsl(265, 85%, 65%)','hsl(310, 85%, 65%)','hsl(360, 85%, 65%)']
    $game.empty();
    for (var i = 0; i < cardValues.length; i++) {
      var value = cardValues[i];
      var color = cardColors[value - 1];
      var data = {
        value: value,
        color: color,
        isFlipped: false
      }
      var $card = $('<div class="card col-sm-3"></div>');
      $card.data(data);
      $game.append($card);
    }
  };

  /*
    Flips over a given card and checks to see if two cards are flipped over.
    Updates styles on flipped cards depending whether they are a match or not.
   */

  MatchGame.flipCard = function($card, $game) {

  };
});

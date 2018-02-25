// <!-- The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters.
// Here's how the app works:
// 1. There will be four crystals displayed as buttons on the page.
// 2. The player will be shown a random number at the start of the game.
// 3. When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// 4. Your game will hide this amount until the player clicks a crystal.
// 5. When they do click one, update the player's score counter.
// 6. The player wins if their total score matches the random number from the beginning of the game.
// 7. The player loses if their score goes above the random number.
// 8. The game restarts whenever the player wins or loses.
//       When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
//
//       The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game. -->
$(document).ready(function(){
  // generating a random number between 1 and 12 for each picture
  var buffalo = Math.floor((Math.random())* 12 + 1);
  console.log(buffalo);
  var buffaloNy = Math.floor((Math.random())* 12 + 1);
  console.log(buffaloNy);
  var bullies = Math.floor((Math.random()) * 12 + 1);
  console.log(bullies);
  var buffalo4 = Math.floor((Math.random()) * 12 + 1);
  console.log(buffalo4);

  // generating a random number between 19 and 120  to start the games
  var goalNumber = Math.floor((Math.random()) * 120 + 19);
  console.log(goalNumber);

  // show wins and losses on screen
    var win = 0;
    var losses = 0;

  // current number that you images have added up to
  var currentNumber = "";

//
  $("#Buffalo").on("click", function() {


  });
});

// Note: As part of this assignment I wanted to challenge myself
// this challeng was to dynamically create the answer buttons
// and have them removed every question, I know this is probably
// not the most efficient way, but this was a skill building exercise

// TO DO:
// Add background images that cycle on a timer
// Add music
// Add a mute button that floats

var timer, correct, incorrect, key, madeGuess;

var guesses = $("#aBlock");

var trivia = {
  1: {
    question: "What is the name of Jon's direwolf?",
    A: ["Ghost", "Nymeria", "Summer", "Grey Wind"],
    answer: "Ghost"
  }
};

var answerOptions = [];

// Reset function
function reset() {
  timer = 30 * 1000;
  correct = 0;
  incorrect = 0;
  madeGuess = false;
  $("#tText")
    .text("00:30")
    .css("color", "black");
  answerOptions = [];
}

// The start button is pressed
function start() {
  newQ();
  startTime();
}

// Selects the next question, randomizes the answers and dynamically creates the buttons
function newQ() {
  // Don't want the user clicking on multiple buttons in a single turn
  madeGuess === false;
  // Ensures the array that holds the answers is clear
  answerOptions = [];

  // Fills answerOptions array with possible guesses
  for (var i = 0; i < trivia[1].A.length; i++) {
    // For each iteration, push answer to answerOptions
    answerOptions.push(trivia[1].A[i]);

    // Record the index number of the answer into the key variabe
    if (trivia[1].A[i] === trivia[1].answer) {
      key = trivia[1].A[i];
    }
  }

  // Shuffles the answers
  shuffle(answerOptions);
  console.log(answerOptions);

  // Displays the question
  $("#qText").text(trivia[1].question);

  // Creates an answer button for every answerOption.
  for (var x = 0; x < answerOptions.length; x++) {
    // For each iteration, we will create a button
    var answerBtn = $("<button>");

    // Each crystal will be given the class for styling ".btn .btn-secondary".
    answerBtn.addClass("btn btn-secondary answer");

    // Each answerBtn will be given a data attribute called data-answer which holds it's array index
    answerBtn.attr("data-answer", answerOptions[x]);

    // Adds text to the buttons
    answerBtn.text(answerOptions[x]);

    // Adds each button (with all it classes and attributes) to the page.
    guesses.append(answerBtn);
  }
}

// Selecting an answer
guesses.on("click", ".answer", function() {
  console.log("User made a guess? " + madeGuess);
  if (madeGuess === false) {
    madeGuess = true;
    console.log("User made a guess? " + madeGuess);
    var userGuess = $(this).attr("data-answer");

    console.log(key);

    // Make the correct button turn green
    $("button[data-answer*=" + key)
      .addClass("btn-success")
      .removeClass("btn-secondary");

    // Condition if user guesses correct answer
    if (userGuess === key) {
      $("#tText")
        .text("Correct!")
        .css("color", "green");
      correct++;
    } else {
      $("#tText")
        .text("Better luck next time...")
        .css("color", "red");
      $(this)
        .addClass("btn-danger")
        .removeClass("btn-secondary");
      incorrect++;
    }

    // Clears buttons after selection is made so we can re-create them dynamically again
    // setTimeout(function() {
    //$("button").remove();
    // }, 3000);
  }
});

// Mix up the answers
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function startTime() {
  // Timer function goes here
}

// Time Converter
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

window.onload = function() {
  reset();
  newQ();
  console.log(trivia[1].question);
};

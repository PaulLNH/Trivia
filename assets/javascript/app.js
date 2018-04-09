var timer, correct, incorrect;

var guesses = $("#aBlock");

var Q = {
  num: 1,
  question: "What is the name of Jon's direwolf?",
  A: ["Ghost", "Nymeria", "Summer", "Grey Wind"]
};

var answerOptions = [];

// Reset function
function reset() {
  timer = 30 * 1000;
  correct = 0;
  incorrect = 0;
  $("#tText").text("00:30");
  answerOptions = [];
}

// The start button is pressed
function start() {
  newQ();
  startTime();
}

// Selects the next question, randomizes the answers and dynamically creates the buttons
function newQ() {
  // Ensures the array that holds the answers is clear
  answerOptions = [];

  // Fills answerOptions array with possible guesses
  for (var i = 0; i < Q.A.length; i++) {
    // For each iteration, push answer to answerOptions
    answerOptions.push(Q.A[i]);
  }

  // Shuffles the answers
  shuffle(answerOptions);
  console.log(answerOptions);

  // Displays the question
  $("#qText").text(Q.question);
  
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

function startTime() {}

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

// Selecting an answer
guesses.on("click", ".answer", function() {
  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var userGuess = $(this).attr("data-answer");
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("You guessed: " + userGuess);

  // Clears buttons after selection is made so we can re-create them dynamically again
  $("button").remove();
});

window.onload = function() {
  reset();
  newQ();
};

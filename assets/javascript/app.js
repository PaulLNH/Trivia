// SELF GOALS FOR ASSIGNMENT
// 1.) Make game mobile friendly / responsive
// 2.) Make app scalable (more questions, answers, ect)
// 3.) Work with dynmaicly generated elements
// 4.) Replay value: give user metrics on how they did, and randomize everything

// TO DO:
// Add background images that cycle on a timer
// Add music
// Add a mute button that floats

var timer = $("#tText"),
  timeLeft = 5,
  timerId = setInterval(countdown, 1000),
  howManyQuestions = 5,
  correct,
  incorrect,
  key,
  madeGuess,
  currentQ,
  guesses = $("#aBlock"),
  answerOptions = [],
  roundQuestions = [];

// Reset function
function reset() {
  correct = 0;
  incorrect = 0;
  madeGuess = false;
  currentQ = 0;
  timer.text("00:30").css("color", "black");
  answerOptions = [];
  roundQuestions = [];
}

// Selects the next question, randomizes the answers and dynamically creates the buttons
function newQ() {
  // Clears buttons
  $("button").remove();
  // Clears image
  $("img").remove();
  console.log(currentQ);
  // Don't want the user clicking on multiple buttons in a single turn
  madeGuess = false;

  //////// ENDS GAME IF NO MORE QUESTIONS /////////
  if (currentQ < roundQuestions.length) {
    // Ensures the array that holds the answers is clear
    answerOptions = [];
    timeLeft = 30;

    // Fills answerOptions array with possible guesses
    // Set a variable to iterate
    for (var i = 0; i < roundQuestions[currentQ].A.length; i++) {
      // For each iteration, push answer to answerOptions
      answerOptions.push(roundQuestions[currentQ].A[i]);

      // Record the index number of the answer into the key variabe
      if (roundQuestions[currentQ].A[i] === roundQuestions[currentQ].answer) {
        key = roundQuestions[currentQ].A[i];
      }
    }

    // Shuffles the answers
    shuffle(answerOptions);
    console.log(answerOptions);

    // Displays the question
    $("#qText").text(roundQuestions[currentQ].question);

    // Creates an answer button for every answerOption.
    for (var x = 0; x < answerOptions.length; x++) {
      // For each iteration, we will create a button
      var answerBtn = $("<button>");

      // Each button will be given the class for styling ".btn .btn-secondary".
      answerBtn.addClass("btn btn-secondary answer");

      // Each answerBtn will be given a data attribute called data-answer which holds it's array index
      answerBtn.attr("data-answer", answerOptions[x]);

      // Adds text to the buttons
      answerBtn.text(answerOptions[x]);

      // Adds each button (with all it classes and attributes) to the page.
      guesses.append(answerBtn);
    }
    // Starts clock
    countdown();
  } else {
    roundOver();
  }
}

// Selecting an answer
guesses.on("click", ".answer", function() {
  console.log("User made a guess? " + madeGuess);
  // Prevents user from clicking multiple buttons
  if (!madeGuess) {
    madeGuess = true;

    // Assigns the button the user clicked on to userGuess
    var userGuess = $(this).attr("data-answer");

    // Condition if user guesses correct answer
    if (userGuess === key) {
      correctGuess();
    } else {
      incorrectGuess();
      $(this)
        .addClass("btn-danger")
        .removeClass("btn-secondary");
    }
  }
});

function correctGuess() {
  // What happens if user guesses correct.
  // Stop timer
  clearTimeout(timerId);
  // Set text to indicate answer was correct
  timer.text("Correct!").css("color", "green");
  // Incriments correct guess
  correct++;
  // Runs the correct answer sequence
  correctAnswer();
}

function incorrectGuess() {
  // What happens if user guesses incorrect..
  // Stop timer
  clearTimeout(timerId);
  // Set text to indicate answer was incorrect
  timer.text("Wrong!").css("color", "red");
  // Incriment incorect guess
  incorrect++;
  // Shows user what the correct answer was
  correctAnswer();
}

function correctAnswer() {
  showAnswer();

  setTimeout(function() {
    // Display image after 4 seconds
    $("button").remove();
    var displayImg = $("<img />")
      .attr({
        src: roundQuestions[currentQ].img,
        width: "100%",
        height: "auto"
      })
      .appendTo(guesses);
    setTimeout(function() {
      // Moves on to the next question
      currentQ++;
      newQ();
    }, 3000);
  }, 4000);
}

// Displays the correct answer
function showAnswer() {
  // Converts to a string to prevent errors on answers with spaces
  var answerKey = JSON.stringify(key);
  // Turns correct button green
  $("button[data-answer*=" + answerKey)
    .addClass("btn-success")
    .removeClass("btn-secondary");
}

// Randomize questions
function newRound() {
  roundQuestions = [];
  // Logic to pick 15 questions
  while (roundQuestions.length < howManyQuestions) {
    // Select a random number that represents the trivia array
    var i = Math.floor(Math.random() * Object.keys(trivia).length);
    // If that index is not in the array, add it to the array
    if (roundQuestions.indexOf(trivia[i]) === -1) {
      // Add trivia question to round questions
      roundQuestions.push(trivia[i]);
    }
  }
}

// Displays stats at the end!
function roundOver() {
  // Display stats at the end
  $("button").remove();
  $("img").remove();
  var displayStats = $("<h3>")
    .text(
      "You got " +
        correct +
        " correct out of " +
        roundQuestions.length +
        ". " +
        correct / roundQuestions.length * 100 +
        "%"
    )
    .appendTo(guesses);

  // Some snarky message about doing better < 40%
  if (correct / roundQuestions.length < 0.5) {
    var displayMsg = $("<p>")
      .text("You don't even watch Game of Thrones do you...")
      .appendTo(displayStats);
  }
  // You better take the test again < 75%
  if (correct / roundQuestions.length < 0.75 && correct / roundQuestions.length > 0.5) {
    var displayMsg = $("<p>")
      .text("You better take the test again, we both know you can do better.")
      .appendTo(displayStats);
  }
  // At least you know more than Jon Snow < 95%
  if (correct / roundQuestions.length < 0.95 && correct / roundQuestions.length > 0.75) {
    var displayMsg = $("<p>")
      .text("At least you know more than Jon Snow...")
      .appendTo(displayStats);
  }
  // Not even Bran knows as much about GoT as you! === 100%
  if (correct / roundQuestions.length === 1) {
    var displayMsg = $("<p>")
      .text("Not even Bran knows as much about Game of Thrones as you!")
      .appendTo(displayStats);
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

// Countdown timer
function countdown() {
  if (timeLeft == -1) {
    console.log("times up!");
    timesUp();
    clearTimeout(timerId);
  } else {
    timer.text(timeConverter(timeLeft));
    timeLeft--;
    if (timeLeft < 5) {
      timer.css("color", "red");
    }
  }
}

function timesUp() {
  // Don't want the user selecting the answer after they are shown!
  madeGuess = true;
  console.log("times up function was called");
  timer.text("Out of time!").css("color", "red");
  // Show user what the correct answer was
  correctAnswer();
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

// The start button is pressed
function start() {
  // Starrting function
}

window.onload = function() {
  reset();
  newRound();
  newQ();
  console.log(key);
  console.log(roundQuestions);
};

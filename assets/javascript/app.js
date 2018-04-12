// SELF GOALS FOR ASSIGNMENT
// 1.) Make game mobile friendly / responsive
// 2.) Make app scalable (more questions, answers, ect)
// 3.) Work with dynmaicly generated elements
// 4.) Replay value: give user metrics on how they did, and randomize everything

var display = $("#tText"),
    howManyQuestions = 15, // Change this variable to the number of questions you want per round
    timeToAnswer = 15, // Change this variable to set the countdown timer in seconds
    timer,
    intervalId,
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
    display.text("00:15").css("color", "black");
    answerOptions = [];
    roundQuestions = [];
}

// Selects the next question, randomizes the answers and dynamically creates the buttons
function newQ() {
    // Clears buttons
    $("button").remove();
    // Clears image
    $("img").remove();
    // Clears paragraphs from previous round
    $("p").remove();
    $("h4").remove();

    // Don't want the user clicking on multiple buttons in a single turn
    madeGuess = false;

    //////// ENDS GAME IF NO MORE QUESTIONS /////////
    if (currentQ < roundQuestions.length) {
        // Ensures the array that holds the answers is clear
        answerOptions = [];

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
        // Puts time on clock
        timer = timeToAnswer;
        run();
    } else {
        roundOver();
    }
}

// Selecting an answer
guesses.on("click", ".answer", function () {
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
    stop();
    // Set text to indicate answer was correct
    display.text("Correct!").css("color", "green");
    // Incriments correct guess
    correct++;
    // Runs the correct answer sequence
    correctAnswer();
}

function incorrectGuess() {
    // What happens if user guesses incorrect..
    // Stop timer
    stop();
    // Set text to indicate answer was incorrect
    display.text("Wrong!").css("color", "red");
    // Incriment incorect guess
    incorrect++;
    // Shows user what the correct answer was
    correctAnswer();
}

function correctAnswer() {
    showAnswer();

    setTimeout(function () {
        // Display image after 4 seconds
        $("button").remove();
        var displayImg = $("<img />")
            .attr({
                src: roundQuestions[currentQ].img,
                width: "100%",
                height: "auto"
            })
            .appendTo(guesses);
        setTimeout(function () {
            // Moves on to the next question
            currentQ++;
            // Assigns a new question
            newQ();
        }, 2000);
    }, 2000);
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
    // Logic to pick questions for a new round
    while (roundQuestions.length < howManyQuestions) {
        // Select a random number that represents the trivia array
        var r = Math.floor(Math.random() * Object.keys(trivia).length);
        // If that index is not in the array, add it to the array
        if (roundQuestions.indexOf(trivia[r]) === -1) {
            // Add trivia question to round questions
            roundQuestions.push(trivia[r]);
        }
    }
}

// Displays stats at the end!
function roundOver() {
    // Display stats at the end
    $("button").remove();
    $("img").remove();
    var displayStats = $("<h4>")
        .text(
            "You got " +
            correct +
            " correct out of " +
            roundQuestions.length +
            " " +
            "(" +
            Math.floor(correct / roundQuestions.length * 100) +
            "% )"
        )
        .appendTo(guesses);

    // Some snarky message about doing better < 40%
    if (correct / roundQuestions.length < 0.5) {
        var displayMsg = $("<p>")
            .text("You don't even watch Game of Thrones do you...")
            .appendTo(guesses);
        start("No, but I want to learn!");
    }
    // You better take the test again < 75%
    if (
        correct / roundQuestions.length < 0.75 &&
        correct / roundQuestions.length > 0.5
    ) {
        var displayMsg = $("<p>")
            .text("Try again, we both know you can do better...")
            .appendTo(guesses);
        start("You're right, I can do better!");
    }
    // At least you know more than Jon Snow < 95%
    if (
        correct / roundQuestions.length < 0.95 &&
        correct / roundQuestions.length > 0.75
    ) {
        var displayMsg = $("<p>")
            .text("At least you know more than Jon Snow...")
            .appendTo(guesses);
        start("Sigh... I'll try again.");
    }
    // Not even Bran knows as much about GoT as you! === 100%
    if (correct / roundQuestions.length === 1) {
        var displayMsg = $("<p>")
            .text("Not even Bran knows as much about Game of Thrones as you!")
            .appendTo(guesses);
        start("Even though I aced it, I'll play again!");
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

// Runs countdown timer
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function
function decrement() {
    //  Decrease number by one.
    timer--;
    //  If player has over 5 seconds, show black
    if (timer > 5) {
        display.text(timeConverter(timer)).css("color", "black");
    } else {
        // If player has less than 5 seconds, turn up intensity and make red
        display.text(timeConverter(timer)).css("color", "red");
    }

    //  Once number hits zero...
    if (timer <= 0) {
        // Stops timer
        stop();
        // Alerts user time is up
        timesUp();
    }
}

//  Stops the timer
function stop() {
    //  Clears our intervalId and stops the countdown
    clearInterval(intervalId);
}

// This runs when the player is out of time
function timesUp() {
    // Don't want the user selecting the answer after they are shown!
    madeGuess = true;
    display.text("Out of time!").css("color", "red");
    // Show user what the correct answer was
    correctAnswer();
}

// Time Converter to show the time in a logical format
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
function start(btnText) {
    // Create a start button
    var startBtn = $("<button>");
    // Add class for styling ".btn .btn-primary".
    startBtn.addClass("btn btn-primary start");
    // Adds text to the button
    startBtn.text(btnText);
    // Adds button to the #aBlock
    guesses.append(startBtn);
    // Make button clickable
    // Selecting an answer
    guesses.on("click", ".start", function () {
        // Game on!
        reset();
        newRound();
        newQ();
    });
}

window.onload = function () {
    // Initial message to user
    display.text("Think you know Game of Thrones?");
    var displayMsg = $("<p>")
        .text(
            "Try to answer " +
            howManyQuestions +
            " Got questions in " +
            timer +
            "sec each."
        )
        .appendTo(guesses);
    // Starting button
    start("Start Trivia Game!");
};
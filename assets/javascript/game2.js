$(document).ready(function(){
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0; 
    var userGuess = "";
    var number;

    var questionOne = {
        question: "What is the name of the town in whicn Parks and Recreation is set?",
        answers: ["Fort Wayne", "Gary", "Pawnee", "Hammond"],
        correctAnswer: "Pawnee",
        image: "./assets/images/pawnee.png",

    };

    var questionTwo = {
        question: "What was the name of the media company Tom Haverford founded?",
        answers: ["Entertainment 720", "Tommy Fresh Productions", "Prestige Worldwide", "Mona Lisa Media"],
        correctAnswer: "Entertainment 720",
        image: "./assets/images/Entertainment_720_Logo.jpg"

    };

    var questionThree = {
        question: "What is the most consistent name of Andy Dwyer's rock band",
        answers: ["Rock the Cash Bar", "Andy D and the Kids Table", "Yellow Sub Sandwich", "Mouse Rat"],
        correctAnswer: "Mouse Rat",
        image: "./assets/images/mouserat.jpg"

    };

    var questionFour = {
        question: "How old was Ben when the infamous Ice Town happened??",
        answers: ["22", "18", "19", "28"],
        correctAnswer: "18",
        image: "./assets/images/icetown.jpg"

    };
    var questionFive = {
        question: "What is your favorite color5?",
        answers: ["Red", "Blue", "Yellow", "Green"],
        correctAnswer: "Yellow",
        image: "http://lorempixel.com/400/200/"

    };
    
        
    

    var results = ["Correct", "Incorrect", "Times up"]
    var allQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
    console.log(questionOne.correctAnswer);
    var i = 0;
    gameLoop();
    $("#show-number").html("<h2>" + number + "</h2>");
        var intervalId;
        $(".answer").on("click", stop);
        $(".answer").on("click", function () {
            console.log(this.value);
            playerGuess = this.value;

            if (playerGuess === allQuestions[i].correctAnswer) {
                $("#result").text(results[0] + "!");
                $("#image").attr("src", allQuestions[i].image);
                $("#gameScreen").hide();
                $("#resultScreen").show();
                correctAnswers++;
                console.log("correct " + correctAnswers)
                stop();
                i++; 
                console.log("I: " + i)
                setTimeout(gameLoop, 3000);
                
                

            } else {
                $("#result").text(results[1] + "! The correct answer is " + allQuestions[i].correctAnswer + ".");
                $("#image").attr("src", allQuestions[i].image);
                $("#gameScreen").hide();
                $("#resultScreen").show()
                stop();
                i++;
                setTimeout(gameLoop, 5000);
                wrongAnswers++;
                console.log("wrong " + wrongAnswers)

                } 

    });

    function writeQuestions(currentQuestion) {
        if (allQuestions.length >= (i + 1)){
            console.log("I = " + i + "allqu = " + allQuestions.length)
        $("#question").text(currentQuestion.question);
        $("#A").text(currentQuestion.answers[0]);
        $("#B").text(currentQuestion.answers[1]);
        $("#C").text(currentQuestion.answers[2]);
        $("#D").text(currentQuestion.answers[3]);
        $("#A").attr("value", currentQuestion.answers[0]);
        $("#B").attr("value", currentQuestion.answers[1]);
        $("#C").attr("value", currentQuestion.answers[2]);
        $("#D").attr("value", currentQuestion.answers[3]);
        }
     else writeStats();
    }

    function newGame(){
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0; 
        userGuess = "";
        number = 0;
        i = 0;
        $("#finalScreen").hide();
        gameLoop();

    }

    function writeStats() {
        $("#gameScreen").hide();
        $("#correct").text("Correct Answers: " + correctAnswers);
        $("#incorrect").text("Incorrect Answers: " + wrongAnswers);
        $("#unanswered").text("Unanswered: " + unanswered);
        $("#playAgain").html('<button id = "playAgain">Play Again </button>');
        $("#playAgain").on("click", function () {
            newGame();

    });
    }

    function gameLoop() {           
        $("#gameScreen").show();
        $("#resultScreen").hide();
        $("#finalSCreen").empty();    
        writeQuestions(allQuestions[i]);
        run();
    }

    function run() {
        number = 10;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        $("#show-number").html("<h2>" + number + "</h2>");
            if (number === 0) {
                stop();
                $("#result").text(results[2] + ". The correct answer is " + allQuestions[i].correctAnswer + ".");
                $("#image").attr("src", allQuestions[i].image);
                $("#gameScreen").hide();
                $("#resultScreen").show();
                stop();
                i++;
                unanswered++;
                console.log(unanswered)
                setTimeout(gameLoop, 5000);
            } else {
        
            }
    }

    function stop() {
        clearInterval(intervalId);
        number = 10;
    }
        
});
    
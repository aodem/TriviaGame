//The JS for the Denzel Washington trivia game.
$(document).ready(function () {
    var intervalId;
    var intervalId2;
    var userCorrect = 0;
    var userIncorrect = 0;
    var timer = 21;

    var trivia = {
        objarray: [{
            question: "'Creasy bear' was the name of a young girls teddy bear in what Denzel movie? ",
            possibleAnswers: ["The Equalizer", "Training Day", "Man On Fire", "John Q"],
            correctAnswer: () => { return trivia.objarray[0].possibleAnswers[2] }
            },
            {
            question: "Denzel played a rogue intelligence agent in this movie that ended in him helping the agent tasked to bring him in.",
            possibleAnswers: ["Safe House", "The Taking of Pelam 123", "Deja Vu", "The Book of Eli"],
            correctAnswer: () => { return trivia.objarray[1].possibleAnswers[0] }
            },
            {
            question: "Denzel played a character that held a hospital hostage in which movie?",
            possibleAnswers: ["The Mancharian Candidate", "John Q", "2 Guns", "American Gangster"],
            correctAnswer: () => { return trivia.objarray[2].possibleAnswers[1] }
            },
            {
            question: "'King King ain't got nothing on me' is a famous line from this movie.",
            possibleAnswers: ["The Equalizer 2", "Fences", "Flight", "Training Day"],
                correctAnswer: () => { return trivia.objarray[3].possibleAnswers[3] }
            },
            {
            question: "In this movie, Denzels character coached a football team that was lead by a Quarterback that went by the nickname 'Sunshine'.",
            possibleAnswers: ["Rember the Titans", "The Great Debaters", "unstoppable", "Inside Man"],
                correctAnswer: () => { return trivia.objarray[4].possibleAnswers[0] }
            },
            {
            question: "NBA all star Ray Allen played the son of Jake Shuttlesworth played by Denzel Washington",
            possibleAnswers: ["Antwon Fisher", "He Got Game", "John Q", "Inside Man"],
                correctAnswer: () => { return trivia.objarray[5].possibleAnswers[1] }
            },
            {
            question: "Mark Wahleberg co-starred in this movie",
            possibleAnswers: ["2 Guns", "The Equalizer", "Fences", "The Equalizer 2"],
                correctAnswer: () => { return trivia.objarray[6].possibleAnswers[0] }
            },
            {
            question: "Did he really land a plane after turning it upside down and flying intoxicated?",
            possibleAnswers: ["Flight", "Unstoppable", "Inside Man", "Fences"],
            correctAnswer: () => { return trivia.objarray[7].possibleAnswers[0] }
            },
        ],
        indexslide: 0,   
        questionSlide: function (value1, value2) {
            function myQDiv (innerContent) {
                a = $("<div>").appendTo("#slide_entry");
                a.addClass("row justify-content-center");
                a.html("<p>" + innerContent + "</p>"); 
                }
            function myADiv (innerContent) {
                a = $("<div>").appendTo("#slide_entry");
                a.addClass("row justify-content-center")
                b = $("<button>").appendTo(a);
                b.addClass("hover slideButton");
                b.html("<p>" + innerContent + "</p>");
                }
            myQDiv(value1);

            for (i = 0; i < value2.length; i++) {
                myADiv(value2[i]);
            }
        },
        answerCheck: (click, obj) => {
            console.log(click);
            if (click.text() === obj.correctAnswer()) {
                console.log(click.text());
                userCorrect++
                clearInterval(intervalId);
                clearInterval(intervalId2);
                trivia.slideReset();
                trivia.interval();
                timer = 21
            } else if (click.text() !== obj.correctAnswer()){
                userIncorrect++
                console.log(1 < 0);
                clearInterval(intervalId);
                clearInterval(intervalId2);
                trivia.slideReset();
                trivia.interval();
                timer = 21;
            }

        },
        slideChange: function(){
            $("#slide_entry").empty();
            var slideObj = trivia.objarray[trivia.indexslide];
            console.log(slideObj);
            trivia.questionSlide(slideObj.question, slideObj.possibleAnswers);
            console.log(trivia.indexslide);
            // trivia.indexslide++
        },
        slideReset: function() {
            $("#slide_entry").empty();
            trivia.indexslide++
            if (trivia.indexslide === 8) {
                //load the ending page that contains the scores and a restart button that will start the game over again.
                // trivia.indexslide = 0;
                $("#slide_entry").empty();
                $("#timer").empty();
                trivia.endGameScreen();  
            }
        },
        interval: function() {
            if(trivia.indexslide !== 8){
                trivia.slideChange();
                trivia.decrement();
                intervalId = setInterval(trivia.slideChange, 20000);
                intervalId2 = setInterval(trivia.decrement, 1000);
            }else{
                userCorrect = 0;
                userIncorrect = 0;
                trivia.indexslide = 0;
                clearInterval(intervalId);
                clearInterval(intervalId2);
            } 
            
            console.log(trivia.indexslide);
        },
        decrement: function(){
            timer--
            $("#timer").html("<p id='clock'>" + timer + "</p>");
            if(timer === 0){
                timer = 21;
                alert("Too Slow!")
            }
        },
        splashScreen: function(){
            //the will create the splash page with the game instructions and then starts the game. 
            $("#slide_entry").empty();
            $("<div>").appendTo("#slide_entry").addClass("row justify-content-left").html("<h1>Test <br> Your <br> Denzel <br> Knowledge.</h1>");
            $("<div>").appendTo("#slide_entry").addClass("row justify-content-center").html("<p  class='hover space'> Press the spacebar to Start! </p>"); 
            $('#timer').hide();
        },
        endGameScreen: function(){
            //create a new page that displays the game outcome a new background and generates a restart button to start the game over.
            var queryURL = "https://api.chucknorris.io/jokes/random"

            $("<div>").appendTo("#slide_entry").html("<p class='space'>" + "Answers Correct: " + userCorrect + "</p>" + "<p class='space'>" + "Answers Incorrect: " + userIncorrect + "</p>");
            
            if(userCorrect > userIncorrect){

                $.ajax({
                    url: queryURL,
                    method: "get",
                }).then(function (response) {
                    joke = $("<div>");
                    joke.addClass("alert alert-warning").attr("role", "alert");
                    joke.text(response.value);
                    joke.appendTo("#slide_entry");
                    $("#timer").html("<img class='norris' src=" + response.icon_url + "></img>");
                })
            }else{
                noJoke = $("<div>");
                noJoke.addClass("alert alert-danger").attr("role", "alert");
                noJoke.text("NO CHUCK NORRIS JOKE FOR YOU!");
                noJoke.appendTo("#slide_entry");
                $("#timer").html("<img src=" + response.icon_url + "></img>");
            }

            gameRestartButton = $("<button>");
            gameRestartButton.addClass("hover space").html("<p id='restart'>Restart Game</p>");
            gameRestartButton.appendTo("#slide_entry");

            console.log(trivia.indexslide);
        }
    };

// $(document).ready(function () {
    trivia.splashScreen();

    $(document).on("keyup", function(e){
        console.log(e);
        if(e.keyCode === 32){
            trivia.interval();
            $('#timer').show();
        }
    })

    $(document).on("click", "#restart", trivia.splashScreen);

    $(document).on("click", ".slideButton", function () {
        console.log(trivia.objarray[trivia.indexslide], $(this).text(), trivia.objarray[trivia.indexslide].correctAnswer());
        trivia.answerCheck($(this), trivia.objarray[trivia.indexslide]);
        
    })

})

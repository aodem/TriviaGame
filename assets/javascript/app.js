//The JS for the Denzel Washington trivia game.

var intervalId;
var intervalId2;
var userCorrect;
var userIncorrect;
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
            b.addClass("hover");
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
            clearInterval(intervalId);
            clearInterval(intervalId2);
            trivia.slideReset();
            trivia.interval();
            timer = 21
        } else {
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
        trivia.indexslide++
    },
    slideReset: function() {
        $("#slide_entry").empty();
        trivia.indexslide++
    },
    interval: function() {
        trivia.slideChange();
        trivia.decrement();
        intervalId = setInterval(trivia.slideChange, 20000);
        intervalId2 = setInterval(trivia.decrement, 1000)

    },
    decrement: function(){
        timer--
        $("#timer").html("<p id='clock'>" + timer + "</p>");
        if(timer === 0){
            timer = 21;
            alert("Too Slow!")
        }
    }
};



$(document).on("click", "button", function () {
    console.log(trivia.objarray[trivia.indexslide], $(this).text(), trivia.objarray[trivia.indexslide].correctAnswer());
    trivia.answerCheck($(this), trivia.objarray[trivia.indexslide]);
})


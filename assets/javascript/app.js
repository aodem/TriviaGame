//The JS for the Denzel Washington trivia game.

var trivia = {
    qOne: {
        question: "'Creasy bear' was the name of a young girls teddy bear in what Denzel movie? ",
        possibleAnswers: ["The Equalizer", "Training Day", "Man On Fire", "John Q"],
        correctAnswer: () => { return trivia.qOne.possibleAnswers[2] },
    },
    qTwo: {
        question: "Denzel played a rogue intelligence agent in this movie that ended in him helping the agent tasked to bring him in.",
        possibleAnswers: ["Safe House", "The Taking of Pelam 123", "Deja Vu", "The Book of Eli", "Inside Man"],
        correctAnswer: () => { return trivia.qTwo.possibleAnswers[0] },
    },
    qThree: {
        question: "'King King ain't got nothing on me' is a famous line from this movie.",
        possibleAnswers: ["The Equalizer 2", "Fences", "Flight", "Training Day"],
        correctAnswer: () => { return trivia.qThree.possibleAnswers[3] },
    },
    qFour: {
        question: "Denzel played a character that held a hospital hostage in which movie?",
        possibleAnswers: ["The Mancharian Candidate", "John Q", "2 Guns", "American Gangster"],
        correctAnswer: () => { return trivia.qFour.possibleAnswers[1] },
    },
    qFive: {
        question: "In this movie, Denzels character coached a football team that was lead by a Quarterback that went by the nickname 'Sunshine'.",
        possibleAnswers: ["Rember the Titans", "The Great Debaters", "unstoppable", "Inside Man"],
        correctAnswer: () => { return trivia.qFive.possibleAnswers[0] },
    },
    qSix: {
        question: "NBA all star Ray Allen played the son of Jake Shuttlesworth played by Denzel Washington",
        possibleAnswers: ["Antwon Fisher", "He Got Game", "John Q"],
        correctAnswer: () => { return trivia.qSix.possibleAnswers[1] },
    },
    qSeven: {
        question: "Mark Wahleberg co-starred in this movie",
        possibleAnswers: ["2 Guns", "The Equalizer", "Fences", "The Equalizer 2"],
        correctAnswer: () => { return trivia.qSeven.possibleAnswers[0] },
    },
    qEight: {
        question: "Did he really land a plane after turning it upside down and flying intoxicated?",
        possibleAnswers: ["Flight", "Unstoppable", "Inside Man", "Fences"],
        correctAnswer: () => { return trivia.qEight.possibleAnswers[0] },
    },
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
};
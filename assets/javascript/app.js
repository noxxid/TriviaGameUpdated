// const quizContainer = document.getElementById('quiz');

// const resultsContainer = document.getElementById('resutls');

// const submitButton = document.getElementById('submit');

// const startButton = document.getElementById('start');

const myQuestions = [
    {
        question: "What is the name of the first book of the Harry Potter series?",
        answers: {
            a: "The Sorceror's Stone",
            b: "The Goblet of Fire",
            c: "The Prisoner of Azkaban",
            d: "Harry Goes to School"
        },

        correctanswer: "a"
    },
    {
        question: "Who teaches the Care of Magical Creatures class?",
        answers: {
            a: "Filch",
            b: "Hagrid",
            c: "Professor McGonagall",
            d: "Esmerelda"
        },

        correctanswer: "b"
    },
    {
        question: "In the game of Quidditch, what ends the game?",
        answers: {
            a: "Time runs out",
            b: "First team to reach 250 points",
            c: "Catching the golden snitch",
            d: "Killing a dementor"
        },

        correctanswer: "c"
    },
    {
        question: "What spell can you use to create aritifical light?",
        answers: {
            a: "Lumos",
            b: "Expecto Patronum",
            c: "Crucio",
            d: "Flipendo"
        },

        correctanswer: "a"
    },
    {
        question: "Who teaches potions at Hogwarts?",
        answers: {
            a: "Snape",
            b: "Hagrid",
            c: "Professor McGonagall",
            d: "Dumbledore"
        },

        correctanswer: "a"
    },
    {
        question: "What is the only way to defeat a dementor?",
        answers: {
            a: "Expecto Patronum",
            b: "Butterbeer",
            c: "Killing Curse",
            d: "Werewolf bite"
        },

        correctanswer: "a"
    },
];


for (var i = 0; i < myQuestions.length; i++) {

    var questions = $("<p>");

    // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
    // lette.addClass("letter-button letter letter-button-color");

    // 4. Then give each "letterBtn" a data-attribute called "data-letter".
    // letterBtn.attr("data-letter", letters[i]);

    // 5. Then give each "letterBtns" a text equal to "letters[i]".
    questions.text(myQuestions[i].question);
    // questions.text(myQuestions[i].answers);
    console.log(myQuestions[i]);
    var form = $("<form>");

    for (var property1 in myQuestions[i].answers) {

        var values = myQuestions[i].answers[property1];
        var answers = $("<input type='radio' name='answer' value=" + property1 + ">" + `<label for="${values}">${values}</label> <br>`);
        // answers.attr("value", myQuestions[i].answers[property1]);

        console.log(myQuestions[i].answers[property1]);

        // answers.text(myQuestions[i].answers[property1]);


        // var answers = $("<input/>", {
        //     type: 'radio',
        //     id: 'answers',
        //     name: 'name',
        //     placeholder: 'Your Name'
        // }), // Creating Input Element With Attribute.





        form.append(answers);
    };



    // for (var a=0; a < myQuestions[i].answers; a++) {
    //     var answerchoice = $("<p>");
    // }

    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
    $("#quiz").append(questions);
    $("#quiz").append(form);
    console.log(form);
    console.log("something")

};

var timeRemaining = 60;
var timer = setInterval(function () {
    document.getElementById("timer").innerHTML = "<h3>" + timeRemaining + " seconds remaining" + "</h3>";
    timeRemaining -= 1;
    if (timeRemaining <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Time's Up!"
    }
}, 1000);

var userInput = [];
var input;

$("input[name='answer']").change(function () {
    var checked = $(this).val();
    if ($(this).is(':checked')) {
        userInput.push(checked);
    } else {
        userInput.splice($.inArray(checked, userInput), 1);
    }
});

document.getElementById("submit").onclick = submitQuiz;
function submitQuiz() {
    input = $("input[name='answer']:checked").val();
    for (var i = 0; i < input.length; i++) {
        userInput.push(input);
        console.log(userInput);
    }
    var amountCorrect = 0;
    var correctanswer = [];


    // myQuestions.forEach(obj => {
    //     console.log(obj.correctanswer)  // correct answer
    //     //wrong answer
    //     // compare them 
    // })

    for (let index = 0; index < myQuestions.length; index++) {
        console.log(myQuestions[index].correctanswer)  // correct answer
        console.log(userInput[index]) //wrong answer
        if (myQuestions[index].correctanswer === userInput[index]) {
            amountCorrect++;// compare them   
        };
        console.log(amountCorrect);

    }
    alert("You got " + amountCorrect + " correct!")




    // for (let k = 0; k < myQuestions.length; k++) {
    //     for (let property1 in myQuestions[k].correctanswer) {
    //         correctanswer.push(myQuestions[k].correctanswer[property1]);
    //         console.log(correctanswer);
    //     }

    // };
    // loop through arrays 
    // if userinput[i] === correctanswer[k]
    // then amountcorrect++;
};






    // timesUp(function () {
    //     setTimeout
    // })





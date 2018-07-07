var userPick;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswer = 0;
var question = 0;
var images;
var count = 30;

// Questions

var sciFiQuestions = [{
    question: "In Star Trek, which ship has the registry number 74656?",
    choices: ["Discovery", "Defiant", "Voyager", "Enterprise"],
    images: ["../images/Rajah.gif"],
    validAnswer: 2
}, {
    question: "In Star Trek, what was Captain Archer's dog's name?",
    choices: ["Athos", "Aramis", "D'Artagnan", "Porthos"],
    validAnswer: 3

}, {
    question: "In Andromeda, how does the ship travel faster than light?",
    choices: ["Slipstream", "Hyperspace", "Warp", "Jump-Drive"],
    validAnswer: 0

}, {
    question: "In Star Trek: Deep Space Nine, What was Deep Space Nine's original name in Cardassian?",
    choices: ["Bajor", "Terrok Nor", "K-7", "Empok Nor"],
    validAnswer: 1

}, {
    question: "In the Stargate Series, what was the first capital ship, built by humans, named?",
    choices: ["Korolev", "Hammond", "Daedalus", "Prometheus"],
    validAnswer: 3

}, {
    question: "In Terra Nova, what year does it take place?",
    choices: ["2063", "2292", "2149", "2460"],
    validAnswer: 2

}, {
    question: "In Continuum, what was the name of the terrorist cell?",
    choices: ["Deviants", "Liber8", "The Maquis", "Magog"],
    validAnswer: 1

}, {
    question: "Amanda Tapping and Christopher Heyerdahl both played roles in the Stargate Series. What other show have they also appeared on together?",
    choices: ["Sanctuary", "The Strain", "Firefly", "Van Helsing"],
    validAnswer: 0

}

];

// Functions

$("#start_button").click(function () {
    $(this).hide();
    counter = setInterval(timer, 1000);
    displayTrivia();
});


function timer() {
    count--;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }

    $("#timer").html("Time remaining: " + "00:" + count + " secs");
}


function displayTrivia() {
    $("#question_div").html(sciFiQuestions[0].question);
    question++;

    var choicesArr = sciFiQuestions[0].choices;
    var buttonsArr = [];

    for (let i = 0; i < choicesArr.length; i++) {
        var button = $('<button>');
        button.text(choicesArr[i]);
        button.attr('data-id', i);
        $('#choices_div').append(button);
    }

}

$('#choices_div').on('click', 'button', function (e) {
    var userPick = $(this).data("id"),
        _t = Trivia || $(window).trivia(),
        index = _t.questions[_t.current].validAnswer,
        correct = _t.questions[_t.current].choices[index];

    if (userPick !== index) {
        $('#choices_div').text("Wrong Answer! The correct answer was: " + validAnswer);
        _t.answer(false);
    } else {
        $('#choices_div').text("Correct!!! The correct answer was: " + validAnswer);
        _t.answer(true);
    }
    _t.nextQ();

});

// I'm missing a bunch of stuff to actually make it work, and show up.

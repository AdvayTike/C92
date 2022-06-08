player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn (you'll understand later!) - " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn (totally related!) - " + player2_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    reveal = "<h4>THIS IS A MATH GAME!!! I TRICKED YOU!! NOW PLAY!!</h4>";
    question = "<h4>" + number1 + " X " + number2 + "</h4>";
    input = "<br> <h4>Answer : </h4><input id='answer' type='text'>";
    check_btn = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row = reveal + question + input + check_btn;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";

}

question_turn = "player1";
answer_turn = "player2_name";


function check() {
    answer = document.getElementById("answer").value;
    if (answer == actual_answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("question_turn").innerHTML = "Question Turn - " + player2_name;
    } else {
        question_turn = "player1"
        document.getElementById("question_turn").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2_name;
    } else {
        answer_turn = "player1"
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
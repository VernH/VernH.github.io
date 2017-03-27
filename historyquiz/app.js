function populate() {
	if(quiz.isEnded()) {
		showScores();
	}
	else {
		/*show question*/
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		/*show choices*/
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i< choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			//MOVE ON TO NEXT QUESTION NO MATTER IF IT IS CORRECT OR NOT
			guess("btn" + i, choices[i]);
		}

			showProgress();
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
};
//THIS WILL SHOW WHAT QUESTION WE ARE ON*** 1 0F 4, 2 OF  4...ETC.
function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question" + currentQuestionNumber + "of " + quiz.questions.length;

}


function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
};


var questions = [ /*---------Questions------------*/    /*----------Choices----------*/ /*Answer*/
	new Question("World War I began in which year?", ["1923", "1938", "1917", "1914"], "1914"),
	new Question("Adolf Hitler was born in which country?", ["France", "Germany", "Austria", "Hungary"], "Austria"),
	new Question("John F. Kennedy was assassinated in?", ["Austin", "Dallas", "1973", "1958"], "Dallas"),
	new Question("What is Donald Trump's middle name?",["Jerry", "Jimmy", "John", "James"],"John"),
	new Question("What year did the United States officially begin its nationhood?", ["1667", "1775", "1676", "1776"], "1776"),
	new Question("Who was the 25th President of the United States?",["Theodore Roosevelt", "William Howard Taft", "William McKinley", "Warren G. Harding"], "William McKinley"),
];

var quiz = new Quiz(questions);

populate();
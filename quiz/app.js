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
			guess("btn" + i, choices[i]);
		}
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
}

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
}


var questions = [ /*---------Questions------------*/    /*----------Choices----------*/ /*Answer*/
	new Questions("World War I began in which year?", ["1923", "1938", "1917", "1914"], "1914"),
	new Questions("Adolf Hitler was born in which country?", ["France", "Germany", "Austria", "Hungary"], "Austria"),
	new Questions("John F. Kennedy was assassinated in?", ["Austin", "Dallas", "1973", "1958"], "Dallas"),
	new Questions("What is Donald Trump's middle name?",["Jerry", "Jimmy", "John", "James"]"John"),

];

var quiz = new Quiz(questions);

populate();
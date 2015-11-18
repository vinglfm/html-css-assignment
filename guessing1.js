var colors = ['white','black', 'blue'];
var guessingColor;


function guessingGame(){
	guessingColor = colors[Math.floor(Math.random() * colors.length)];
	var answerCount = 0;
	var isFinished = false;
	while(!isFinished) {
		var answer = prompt("");
		++answerCount;
		isFinished = checkAnswer(answer);
	}
}

function checkAnswer(answer) {
	if(colors.indexOf(answer) == -1) {
		alert("I dont recognize!");
		return false;
	} 

	switch(guessingColor.localeCompare(answer)) {
			case 0:
				alert("Congratulations!");
				return true;
			case 1:
				alert("Your color is higher!");
				return false;
			case -1:
				alert("Your color is lower!");
				return false;
	}	
}
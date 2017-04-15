var inquirer = require("inquirer");

function BasicCard(front, back) {
	this.front = front;
	this.back = back;
	this.askQuestion = function() {
		console.log("Question: "+this.front)
	}

	this.giveAnswer = function() {
		console.log("Answer: "+this.back);
	}
}

inquirer.prompt([{
	name: "question",
	message: "Enter question"
},{
	name: "answer",
	message: "Enter answer"
}]).then(function(answers){
	var newCard = new BasicCard(answers.front,answers.back);
	newCard.askQuestion();
	newCard.giveAnswer();
})

//function ClozeCard(text, cloze) {
	//this.text = text;
	//this.cloze = cloze;
//}
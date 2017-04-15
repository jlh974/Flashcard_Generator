var inquirer = require("inquirer");

function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.flashcard = "[deletedText] "+"[partialText]";
}

var deletedText = [];
var partialText = [];
var fullText =[];
var loop = 0;

var createFlashcard = function(loop){
	console.log(deletedText);
	console.log(partialText);
	if(loop < 11){
		inquirer.prompt({
			name:"deletedText",
			message: "Enter the answer part of the statement: "
		}).then(function(answers){
			deletedText.push(answers.deletedText);
			loop++;
			createFlashcard(loop);
		})
	}
	if(loop >= 11 && < loop 12){
		inquirer.prompt({
			name:"partialText",
			message: "Enter the question part of the statement: "
		}).then(function(answers){
			partialText.push(answers.deletedText);
			var = card new ClozeCards(deletedText, partialText);
			constructFlashcard(card);
	}
}

var constructFlashcard = function(completeObject) {
	for(var i=0; i<11; i++){
		completeObject.flashcard = completeObject.flashcard.replace("[deletedText]",completeObject.deletedText[i]);
	}
	for(var i=0; i<11; i++){
		completeObject.flashcard = completeObject.flashcard.replace("[partialText]",completeObject.partialText[i]);
	}
	console.log(completeObject.flashcard);
}

createFlashcard(loop);
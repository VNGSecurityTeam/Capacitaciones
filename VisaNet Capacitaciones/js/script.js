var current_question = 1;
var total_questions = 0;
var mode = "show";


function nextQuestion(e) {
	//if(!checkAnswer(e)) return;
	
	jQuery("#question-" + current_question).hide();
	current_question++;
	jQuery("#question-" + current_question).show();
	
	if(current_question == total_questions) {
		jQuery("#next-question").hide();
		//jQuery("#action-button").show();
	} else if (current_question == 2) {
		jQuery("#prev-question").show();
	}
}

function prevQuestion(e) {
	//if(!checkAnswer(e)) return;
	
	jQuery("#question-" + current_question).hide();
	current_question--;
	jQuery("#question-" + current_question).show();
	
	if(current_question == 1) {
		jQuery("#prev-question").hide();
		//jQuery("#action-button").show();
	} else if (current_question == total_questions-1) {
		jQuery("#next-question").show();
	}
}

function quizzinInit() {
	jQuery("#question-1").show();
	total_questions = jQuery(".quizzin-question").length;
	
	if(total_questions == 1) {
		//jQuery("#action-button").show();
		jQuery("#next-question").hide();
	} else {
		jQuery("#next-question").click(nextQuestion);
		jQuery("#prev-question").click(prevQuestion);
	}
	if (current_question == 1) {
		jQuery("#prev-question").hide();
	}
}


jQuery(document).ready(quizzinInit);









/*function checkAnswer(e) {
	var answered = false;
	
	jQuery("#question-" + current_question + " .answer").each(function(i) {
		if(this.checked) {
			answered = true;
			return true;
		}
	});*/
//	if(!answered) {
//		if(!confirm("No has seleccionado ninguna respuesta. ¿Deseas continuar de todos modos?")) {
//			e.preventDefault();
//			e.stopPropagation();
//			return false;
//		}
//	}
/*	return true;
}*/

// This part is used only if the answers are show on a per question basis.
/*function showAnswer(e) {
	if(!checkAnswer(e)) return;
	
	if(mode == "next") {
		mode = "show";
		
		jQuery("#question-" + current_question).hide();
		current_question++;
		jQuery("#question-" + current_question).show();
	
		jQuery("#show-answer").val("Show Answer");
		return;
	}
	
	mode = "next";
	
	jQuery(".correct-answer-label.label-"+current_question).addClass("correct-answer");
	jQuery(".answer-"+current_question).each(function(i) {
		if(this.checked && this.className.match(/wrong\-answer/)) {
			var number = this.id.toString().replace(/\D/g,"");
			if(number) {
				jQuery("#answer-label-"+number).addClass("user-answer");
			}
		}
	});
	
	if(total_questions <= current_question) {
		jQuery("#show-answer").hide();
		jQuery("#action-button").show();
	} else {
		jQuery("#show-answer").val("Next >");
	}
}*/

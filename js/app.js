$(document).ready (function (){

var internets
var userAnswer
var internets = 0;


var quizKey = ["rb","bo","mt","pr","rj","cc"];


$('#answerSubmit').on('click', function () {
		var quizAnswer = 0;
		userAnswer = $("input:checked").val();
	if (userAnswer == quizKey[0]) {
		alert("You are correct!")
		$('#quizQuestion1').remove();
		$('#quizAnswers1').remove();
		$('#quizImg1').remove();
		$('#quizImg2').show();
		$('#quizQuestion2').show();
		$('#quizAnswer2').show();
		alert(userAnswer);

	}else {
		$('#quizQuestion1').remove();
		$('#quizAnswers1').remove();
		$('#quizImg1').remove();
		$('#quizImg2').show();
		$('#quizQuestion2').show();
		$('#quizAnswer2').show();
	

}
		



});



});
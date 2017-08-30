let checkPassword = () => {
	let password = $('.password').val();
	let rePass = $('.repeatPassword').val();
	if(password !== rePass){
		$('h6').removeClass('correct').addClass('mistake');
	}else{
		$('h6').removeClass('mistake').addClass('correct');
	}
}

$('.repeatPassword').on('keyup',function(){
	checkPassword();
});
$('.signin').on('click', function(e){
	$('.modal').fadeIn('1000');
});

$('.close').on('click', function(e){
	$('.modal').fadeOut('10');
});

$('.submit').on('click', function(e){
	$('.getstarted input').addClass('error')
	alert('Please fill in the Available Spaces');
});

$('input').on('click', function(e){
	$(this).removeClass('error')
});


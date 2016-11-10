$(document).ready(function(){
 	console.log('listo');

 
	$('input').on('mouseenter', function() {
		console.log('Cambio clase');
		$(this).addClass('blanco');
	});

	$('input').on('mouseleave', function() {
		console.log('Cambio clase');
		$(this).removeClass('blanco');
	});

	$('input').focus();

	$('#foto').on('dblclick', function() {
		console.log('Oculto foto');
		alert('Se ocultara la foto de Amanda');
		$(this).hide();
	});

	$('#titulo').hover(function() {
		$('h1').slideUp(500);
	}, function() {
		$('h1').slideDown(500);
	});

	$('#about').on('click', 'a', function(e) {
		e.preventDefault();
	});
	
});
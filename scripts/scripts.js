// JavaScript Document


// Script for hamburger menu

(function(d){
	
	// d = document
	
	const $body = d.querySelector('body');
	const $btn = d.querySelector('.menu-btn');
	
	$btn.addEventListener('click', function(){
		
		$body.classList.toggle('show');
		
	});
	
	
})(document);
let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

rotationAnimation = () => {
	$('#site-nav-container-flex-icon-1st').hover(function(){
		$(this)
		.css('animation', 'rotate 2s cubic-bezier(.39,.55,.81,.65) infinite');
		}, function(){
		$(this)
		.css('animation', '');
	});
}
noRotationAnimation = () => {
	$('#site-nav-container-flex-icon-1st').hover(function(){
		$(this)
		.css('animation', '');
		}, function(){
		$(this)
		.css('animation', '');
	});
}

if (!prefersReducedMotion || prefersReducedMotion.matches) {
	noRotationAnimation()
} else {
	rotationAnimation();
}
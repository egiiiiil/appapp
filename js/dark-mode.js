/* let prefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)'); */

$('.dark-mode-button').on( 'click', function() {
	$(document.body).toggleClass('dark-mode');
});

/* if (prefersDarkScheme.matches) {
  $(document.body).toggleClass('dark-mode');
} else {
  document.body.classList.remove("dark-mode");
}
 */
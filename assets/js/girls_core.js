/**
 * isModernBrowser
 * Simple feature detection to identify HTML5 Browsers [gt ie9]
 *
 * @return {Boolean} true or false
 */
function isModernBrowser() {
	return ('querySelector' in document &&
	'localStorage' in window &&
	'addEventListener' in window);
}
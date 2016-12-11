(function () {
	'use strict'

	var input = document.querySelector('input[type="text"]');

	document.querySelectorAll('input[type="button"]').forEach(function(element) {
		if(element.value === 'c') {
			element.addEventListener('click', clearValue);
		} else if(element.value === '=') {
			element.addEventListener('click', showResult);
		} else {
			element.addEventListener('click', addValue);
		}
	});

	function addValue () {
		return input.value += this.value;
	}
	function clearValue () {
		return input.value = '';
	}
	function showResult () {
		return input.value = eval(input.value);
	}
})();
'use strict';
function getInputs(data) {
	var div = document.createElement('div');

	for (var el in data) {
		if (data.hasOwnProperty(el)) {
			var input = document.createElement('input');

			input.name = el;
			input.value = data[el];

			div.appendChild(input);
		}
	}

	return div;
}

module.exports = function (data, opts) {
	var form = document.createElement('form');

	if (typeof data !== 'object' || typeof opts !== 'object') {
		throw new TypeError('Expected an object');
	}

	for (var el in opts) {
		if (opts.hasOwnProperty(el)) {
			form[el] = opts[el];
		}
	}

	form.style.display = 'none';
	form.appendChild(getInputs(data));

	document.body.appendChild(form);
	form.submit();
};

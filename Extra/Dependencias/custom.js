document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#btn-print').addEventListener('click', function () {
		// window.print();

		let wspFrame = document.getElementById('frame').contentWindow;
		wspFrame.focus();
		wspFrame.print();
	});
});

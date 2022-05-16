(function x() {
	if (window.location.href = "https://example.com" || "https://www.example.com") {
		document.body.innerHTML += `
			<dialog id="myDialog">This is a dialog window</dialog>;
		`
		document.querySelector("#myDialog").showModal();
		return false;
	}
})();

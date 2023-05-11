const myInterval = setInterval( () => {
	const [...elements] = document.getElementsByTagName("*");
	elements.forEach((element) => {
		scroll(0,0);
    });
}, 0.);

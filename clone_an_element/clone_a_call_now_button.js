// Create and append an element inside which a clone will appear

document.body.insertAdjacentHTML('beforeend', `
	<aside class="a">
	</aside>
`)

// Clone an element

const myClone = document.querySelector('.b').cloneNode(true);

// Append the clone into the created-appended element above

document.querySelector('.a').appendChild(myClone);

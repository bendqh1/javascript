window.setInterval( () => {
  const icn = document.querySelector("PLACEHOLDER");
  icn.value = "X"
  icn.dispatchEvent(new Event('change'));

  const username = document.querySelector("PLACEHOLDER");
  username.value = "Y"
  username.dispatchEvent(new Event('change'));

  const password = document.querySelector("PLACEHOLDER");
  password.value = "Z"
  password.dispatchEvent(new Event('change'));
}, 5000);

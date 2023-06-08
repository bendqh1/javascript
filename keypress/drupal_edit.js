window.addEventListener('keydown', function(event) {
  if (event.altKey && event.shiftKey && event.key === 'E') {
    document.querySelector('#block-olivero-primary-local-tasks > div.block__content > nav > ul > li:nth-child(2) > a').addEventListener("click", openEditPage).click();
  }
});

// event.key === 'e' didn't work event.key === 'E' did work;

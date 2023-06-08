window.addEventListener('keydown', function(event) {
  if (event.altKey && event.shiftKey && event.key === 'e') {
    document.querySelector('#block-olivero-primary-local-tasks > div.block__content > nav > ul > li:nth-child(2) > a').addEventListener("click", openEditPage).click();
  }
});

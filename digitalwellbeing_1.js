if (
  document.querySelector('title')?.textContent.includes('News') ||
  document.querySelector('title')?.textContent.includes('news') ||
  document.querySelector('meta[name="title"]')?.content.includes('News') ||
  document.querySelector('meta[name="title"]')?.content.includes('news') ||
  document.querySelector('meta[name="description"]')?.content.includes('News') ||
  document.querySelector('meta[name="description"]')?.content.includes('news') ||
  document.querySelector('meta[name="tags"]')?.content.includes('News') ||
  document.querySelector('meta[name="tags"]')?.content.includes('news') ||
  /**/
  document.querySelector('title')?.textContent.includes('חדשות') ||
  document.querySelector('title')?.textContent.includes('החדשות') ||
  document.querySelector('meta[name="title"]')?.content.includes('חדשות') ||
  document.querySelector('meta[name="title"]')?.content.includes('החדשות') ||
  document.querySelector('meta[name="description"]')?.content.includes('חדשות') ||
  document.querySelector('meta[name="description"]')?.content.includes('החדשות') ||
  document.querySelector('meta[name="tags"]')?.content.includes('חדשות') ||
  document.querySelector('meta[name="tags"]')?.content.includes('החדשות')
) {
  window.open("https://google.com/", "_self");
}

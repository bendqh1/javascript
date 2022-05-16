// Credit to user:m3g4p0p on Sitepoint:
// https://www.sitepoint.com/community/t/how-replace-any-occurrence-of-a-word-in-a-document/377844

const walker = document.createTreeWalker(
  document.body, 
  NodeFilter.SHOW_TEXT
)

let node;
while ((node = walker.nextNode())) {
  node.textContent = node.textContent.replace('ערךים', 'ערכים')
  node.textContent = node.textContent.replace('דףים', 'דפים')    
}

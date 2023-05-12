// Credit to Paul Wilkins from sitepoint.com

function walkOnElements(node) {
  const els = node.childNodes;
  els.forEach(function (element) {
    if (element.childNodes) {
      walkOnElements(element);
    }
    if (el.nodeType === Node.TEXT_NODE && el.nodeValue.includes("xyzxyzxyz")) {
      el.nodeValue = el.nodeValue.replace(/xyzxyzxyz/g, "abcabcabc");
    }
  });
}
walkOnElements(document.body);

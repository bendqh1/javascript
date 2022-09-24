// Credit to Paul Wilkins from sitepoint.com

function walkElems(node) {
  const els = node.childNodes;
  els.forEach(function (el) {
    if (el.childNodes) {
      walkElems(el);
    }
    if (el.nodeType === Node.TEXT_NODE && el.nodeValue.includes("xyzxyzxyz")) {
      el.nodeValue = el.nodeValue.replace(/xyzxyzxyz/g, "abcabcabc");
    }
  });
}
walkElems(document.body);

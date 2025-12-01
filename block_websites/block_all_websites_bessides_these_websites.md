// ==UserScript==
// @name         Allow only these websites
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==

(function() {

    const allowedWebsites = [
        "bing.com",
        "duckduckgo.com",
        "google.com",
        "copilot.com",
        "grok.com",
        "chatgpt.com",
        "github.com",
        "grokipedia.com"
    ];

    // replace www. with nothing.
    const host = location.hostname.replace(/^www\./, "");

    // if a the domain name and the TLD are one of the above combinations (ignoring subdomains) then allow the website indeed.
    if (!allowedWebsites.some(domain => host.endsWith(domain))) {
        window.location.href = "about:blank";
    }

})();

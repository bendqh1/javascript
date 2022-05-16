const webPageToWorkOn = "https://example.com/index.php?title=exaple";
const anyChildInAList = document.querySelectorAll(".special li"); // Emphasizing the two items in the querySelectorAll("") data structure;

if ( document.location.href == webPageToWorkOn ) {
    anyChildInAList.forEach( (element) => {
        if ( element.innerHTML.includes(':') ) {
            element.style.display = 'none';
        }
    })
};

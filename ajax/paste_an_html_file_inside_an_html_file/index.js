<html>
<head>
    <script>
        var content = document.querySelector("#content");
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "/FILE_TO_PASTE.html", false);
        ajax.send();
        content.innerHTML += ajax.responseText;
    </script>
</head>
</html>

/*
This is what I once used to include a contact form HTML inside a MediaWiki page.
I didn't want to directly paste all the HTML code inside the MediaWiki page, so:
I called to a file containing it from the MediaWiki page itself with AJAX (after enabling raw HTML mode in MediaWiki).
*/

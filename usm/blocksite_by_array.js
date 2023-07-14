window.setInterval( () => {
    const urlPatternToBlock = [
        'https://search.google.com/search-console'
    ];

    for (const element of urlPatternToBlock) {
        if (window.location.href.includes(urlPatternToBlock)) {
            window.open("https://google.com/", "_self");
        }
    }
}, 1);

window.setInterval( () => {
    const urlPatternToBlock = [
        'cnn.com',
        'search.google.com/search-console'
    ];

    for (const element of urlPatternToBlock) {
        if (window.location.href.includes(urlPatternToBlock)) {
            window.open("https://google.com/", "_self");
        }
    }
}, 1);

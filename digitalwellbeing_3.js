window.setInterval( () => {
    const urlPatternToBlock = [
        'match'
    ];

    for (const element of urlPatternToBlock) {
        if (window.location.href.includes(urlPatternToBlock)) {
            window.open("https://google.com/", "_self");
        }
    }
}, 1);

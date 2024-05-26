function startTitleMarquee() {
    const originalTitle = document.title;
    let marqueeTitle = originalTitle + " - ";
    let index = 0;

    setInterval(() => {
        document.title = marqueeTitle.substring(index, marqueeTitle.length) + marqueeTitle.substring(0, index);
        index++;
        if (index >= marqueeTitle.length) {
            index = 0;
        }
    }, 300); // Adjust the speed by changing the interval (in milliseconds)
}

startTitleMarquee();
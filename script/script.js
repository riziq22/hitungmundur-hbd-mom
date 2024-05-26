const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

(async function () {
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "06/15/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }

    const countDown = new Date(birthday).getTime();
    
    const startTime = new Date().getTime();

    const initialDifference = countDown - startTime;

    const x = setInterval(function() {
        const now = new Date().getTime();
        const elapsedTime = now - startTime;
        const distance = initialDifference - elapsedTime;

        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        // Do something later when date is reached
        if (distance <= 0) {
            window.location.href = 'https://riziq22.github.io/happybirthdaymom/';
            clearInterval(x);
        }
    }, 1000);
})();

// console.log(Hours, Minute, Seconds);

function clock() {
    const clock = document.querySelector(".clock");
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2,"0");
    const Minute = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${Hours}:${Minute}:${Seconds}`;
}

setInterval(clock, 1000);
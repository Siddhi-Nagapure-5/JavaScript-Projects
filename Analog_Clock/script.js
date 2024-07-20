let hour_hand = document.querySelector("#hour");
let minute_hand = document.querySelector("#minute");
let second_hand = document.querySelector("#second");


const clockTick = () => {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;
    // console.log(seconds,minutes,hours);

    rotateHand(second_hand, seconds);
    rotateHand(minute_hand, minutes);
    rotateHand(hour_hand, hours);
}
function rotateHand(element, rotation) {
    element.style.setProperty("--rotate", rotation * 360)
}
setInterval(clockTick, 1000);

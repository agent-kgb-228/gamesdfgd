let playNow = false;
let muson = document.querySelector('#Korobejniki');
muson.volume = 1;
function playmusic() {

    playNow = !playNow

    if (playNow) muson.play()
    else muson.pause()
}
function musicminus() {
    muson.volume -= 0.1
}
function musicplus() {
    muson.volume += 0.1
}

document.addEventListener("keydown", function (e) {



    if (e.code === "Digit0") muson.volume = 0
    else if (e.code === "Digit1") muson.volume = 0.1
    else if (e.code === "Digit2") muson.volume = 0.2
    else if (e.code === "Digit3") muson.volume = 0.3
    else if (e.code === "Digit4") muson.volume = 0.4
    else if (e.code === "Digit5") muson.volume = 0.5
    else if (e.code === "Digit6") muson.volume = 0.6
    else if (e.code === "Digit7") muson.volume = 0.7
    else if (e.code === "Digit8" ) muson.volume = 0.8
    else if (e.code === "Digit9" ) muson.volume = 0.9
    else if (e.code === "Minus") muson.volume -= 0.1
    else if (e.code === "Equal") muson.volume += 0.1

});

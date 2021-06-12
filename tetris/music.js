let playNow = false;
function playmusic(){
    let muson = document.querySelector('#Korobejniki');
    playNow = !playNow
    muson.volume = 0.5;
    if(playNow) muson.play()
    else muson.pause()
}
var context = new AudioContext(),
    sound = new Audio("../sounds/sound1.wav"),
    source = context.createMediaElementSource(sound),
    convolver = context.createConvolver(),
    selectList = document.getElementById("selectList"),
    playButton = document.getElementById("playButton"),
    isPlaying = false;

sound.loop = true;

selectList.addEventListener("change", function() {
    loadImpulseResponse(selectList.options(selctList.selection))
})


source.connect(convolver);
convolver.connect(context.destination);

var request = new XMLHttpRequest();
request.open('GET')

playButton.addEventListener("click", playSwitch);
song.addEventListener("ended", playSwitch);
//document.getElementById("gain").addEventListener("input")
function playSwitch() {
    if(isPlaying == true) {
        song.pause();
        playButton.innerHTML = "Play";
    } else {
        song.play();
        playButton.innerHTML = "Pause";
    }
    isPlaying = !isPlaying;
}
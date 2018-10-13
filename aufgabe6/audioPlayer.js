var playButton = document.getElementById("playButton"),
    context = new AudioContext,
    song = new Audio("song.wav"),
    source = context.createMediaElementSource(song),
    gain = context.createGain(),
    pan = context.createStereoPanner(),
    delay = context.createDelay(0.5),
    isPlaying = false,
    audioBuffer = null;


source.connect(delay);
delay.connect(gain);
gain.connect(pan);
pan.connect(context.destination);

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

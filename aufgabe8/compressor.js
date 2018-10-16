var playButton = document.getElementById("playButton"),
    context = new AudioContext,
    song = new Audio("song.wav"),
    source = context.createMediaElementSource(song),
    compressor = context.createDynamicsCompressor(),
    isPlaying = false,
    audioBuffer = null;

song.loop();
source.connect(compressor);
compressor.connect(context.destination);
playButton.addEventListener("click", playSwitch);

document.getElementById("thresholdSlider").addEventListener("input", function () {
    var thresholdValue = (this.value / 20);
    document.getElementById("thresholdOut").innerHTML = thresholdValue + " db";
    compressor.threshold.value = thresholdValue;
});

document.getElementById("ratioSlider").addEventListener("input", function () {
    var ratioValue = (this.value / 20);
    document.getElementById("ratioOut").innerHTML = ratioValue + ":1";
    compressor.ratio.value = ratioValue;
});

document.getElementById("kneeSlider").addEventListener("input", function () {
    var kneeRange = (this.value / 20);
    document.getElementById("kneeOut").innerHTML = kneeRange;
    compressor.knee = kneeRange;
});

document.getElementById("attackSlider").addEventListener("input", function () {
    var attackValue = (this.value / 20);
    document.getElementById("attackOut").innerHTML = gainValue * 1000 + " ms";
    compressor.attack.value = attackValue;
});

document.getElementById("releaseSlider").addEventListener("input", function () {
    var releaseValue = (this.value / 20);
    document.getElementById("releaseOut").innerHTML = releaseValue * 1000 + " ms";
    compressor.release.value = releaseValue;
});

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

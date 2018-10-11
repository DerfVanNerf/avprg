var context = new (window.AudioContext || window.webkitAudioContext)(),
    drumpads = document.getElementsByClassName(drumpad),
    audioBuffers = [];

for (let i = 1; i <= drumpads.length; i++) {
    getData(i);
    drumpads[i].addEventListener("mousedown", function (e) {playSound(i)});
}

function getData(i) {
    var request = new XMLHttpRequest();
    request.open('GET', "../sounds/sound" + i + ".wav", true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
        var undecodedAudio = request.response;
        context.decodeAudioData(undecodedAudio, function(buffer) {
            audioBuffers[i] = buffer;
        });
    };
    request.send();
}

function playSound(i) {
    /*var sourceBuffer = context.createBufferSource();
    sourceBuffer.buffer = audioBuffers[i];
    sourceBuffer.connect(context.destination);
    sourceBuffer.start(0);*/
    console.log("plays Sound")
}
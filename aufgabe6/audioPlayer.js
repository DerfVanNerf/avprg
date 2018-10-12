var context = new AudioContext,
    gain = context.createGain(),
    pan = context.createStereoPanner(),
    delay = context.createDelay(),
    isPlaying = false
    audioBuffer;
    request = new XMLHttpRequest();

request.open('GET', "song.wav");
request.responseType = "arraybuffer";
request.onload = function() {
    var undecodedAudio = request.response;
    context.decodeAudioData(undecodedAudio, function(buffer){
        audioBuffers = buffer;
    });
};
request.send();



delay.connect(gain);
gain.connect(pan);
pan.connect(context.destination);

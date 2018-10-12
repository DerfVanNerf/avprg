var context = new AudioContext,
    mouseDown = false,
    oscillator = null,
    gainNode = context.createGain();
const MAXFREQUENCY = 2000;
const MINFREQUENCY = 20;

document.body.addEventListener("mousedown", function (e) {
    mouseDown = true;
    oscillator = context.createOscillator();
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    calcFreqAndGain(e.clientX, e.clientY);
    oscillator.start(context.currentTime);
});
document.body.addEventListener("mouseup", stopOscillator);
document.body.addEventListener("mousemove", function (e) {
    if (mouseDown) {
        calcFreqAndGain(e.clientX, e.clientY);
        gainNode.value = e.clientY / window.innerHeight;
    oscillatorNode.frequency.value = (MAXFREQUENCY - MINFREQUENCY) * e.clientX / window.innerWidth + MINFREQUENCY;
    }
});

function stopOscillator() {
    mousedown = false;
    if (oscillator) {
        oscillator.stop(context.currentTime);
        oscillator.disconnect();
    }
}

function calcFreqAndGain(xPosition, yPosition) {
    oscillator.frequency.setTargetAtTime((MAXFREQUENCY-MINFREQUENCY) * xPosition / window.innerWidth + MINFREQUENCY, context.currentTime, 0.01);
    gainNode.gain.setTargetAtTime(1 - yPosition / window.innerHeight, context.currentTime, 0.01);
}
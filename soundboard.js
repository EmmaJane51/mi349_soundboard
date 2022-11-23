var audio = new Audio("applause_sound.wav");

document.onclick = function() {
  audio.play();
}

var audio = new Audio("doorbell_sound.wav");

document.onclick = function() {
  audio.play();
}

var audio = new Audio("laser_sound.wav");

document.onclick = function() {
  audio.play();
}

var sound1 = new Audio();
sound1.src = "applause_sound.wav";

var sound2 = new Audio();
sound2.src = "doorbell_sound.wav";

var sound3 = new Audio();
sound3.src = "laser_sound.wav";

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

const sounds = ['Applause', 'Doorbell', 'Laser']

sounds.forEach(sound => {
const btn = document.createElement('button')
btn.classList.add('btn')

btn.innerText = sound

btn.addEventListener('click', () => {
  stopSongs()

    document.getElementById(sound).play()
})

document.getElementById('buttons').
appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById
    (sound)

    song.pause()
    song.currentTime = 0;
  })
}
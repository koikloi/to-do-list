const am = document.getElementById("AM")

function togglePlay() {
    return am.paused ? am.play() : am.pause();
};

play.addEventListener("click", togglePlay);
document.addEventListener('DOMContentLoaded', function () {
    const vinyl = document.getElementById('vinyl-disk-rotator-global');
    const audio = document.getElementById('my-audio');
    const button = document.getElementById('play-pause-button-global');

    if (vinyl && audio && button) {
        vinyl.addEventListener('click', function () {
            if (audio.paused) {
                audio.play();
                vinyl.style.animationPlayState = 'running';
                button.classList.remove('paused');
                button.classList.add('playing');
            } else {
                audio.pause();
                vinyl.style.animationPlayState = 'paused';
                button.classList.remove('playing');
                button.classList.add('paused');


            }
        });
    }
});

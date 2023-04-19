document.addEventListener("DOMContentLoaded", function () {

    const keys = ['KeyD', 'KeyH', 'KeyR', 'KeyI', 'KeyE', 'KeyF', 'KeyK', 'KeyA', 'KeyV', 'KeyM'];


    const playMusic = (code) => {
        keys.forEach((key, i) => {
            let letter = document.getElementById(`letter-${i + 1}`);

            let sound = new Audio(`audio/${i+1}.mp3`);
            if (code === key) {
                sound.play();
                letter.classList.add('active');
                sound.onended = function () {
                    letter.classList.remove('active');
                };
            } else {
                letter.classList.remove('active');
            }
        })
    }

    document.addEventListener('click', function (e) {
        keys.forEach((key, i) => {
            const letter = `letter-${i + 1}`;
            let childEl = (e.target.id).toString();
            let parentEl = (e.target.parentElement.id).toString();
            if ((childEl === letter) || (parentEl === letter)) {
                playMusic(key);
            }
        })
    })

    document.addEventListener('keydown', (e) =>
        playMusic(e.code));
});
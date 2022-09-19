const mario = document.querySelector('.mario');
const tubo = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600);
}

const loop = setInterval(() => {

    const pipePosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (marioPosition < 30 && pipePosition <= 124 && pipePosition >=  80) {

        tubo.style.animation = 'none';
        tubo.style.left = `${pipePosition}px`;
        tubo.style.bottom = 0;

        mario.style.bottom = `${marioPosition}px`;
        mario.src = './images/game-over.png';
        mario.classList.add('dead');

        clearInterval(loop);

    }
}, 10);

document.addEventListener('keydown', jump);
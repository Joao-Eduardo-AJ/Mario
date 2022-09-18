const mario = document.querySelector('.mario');
const tubo = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (marioPosition < 80 && pipePosition <=  45 && pipePosition >=  0) {

        tubo.style.animation = 'none';
        tubo.style.left = `${pipePosition}px`;
        tubo.style.bottom = 0;
    }

}, 10);

document.addEventListener('keydown', jump);
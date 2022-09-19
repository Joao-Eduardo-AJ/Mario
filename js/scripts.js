const mario = document.querySelector('.mario');
const tubo = document.querySelector('.pipe');
const grass = document.querySelector('#grass')
const block = document.querySelector('#block')
const cloud = document.querySelector('#cloud')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600);
}

const loop = setInterval(() => {

    const cloudPosition = cloud.offsetLeft;
    const pipePosition = tubo.offsetLeft;
    const blockPosition = block.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (marioPosition < 30 && pipePosition <= 124 && pipePosition >=  80) {

        cloud.style.animation = 'none';
        block.style.animation = 'none';
        grass.style.animation = 'none';
        tubo.style.animation = 'none';
        tubo.style.left = `${pipePosition}px`;
        block.style.left = `${blockPosition}px`;
        cloud.style.left = `${cloudPosition}px`;
        tubo.style.bottom = 0;

        mario.style.bottom = `${marioPosition}px`;
        mario.src = './images/game-over.png';
        mario.classList.add('dead');

        clearInterval(loop);

    }
}, 10);

document.addEventListener('keydown', jump);
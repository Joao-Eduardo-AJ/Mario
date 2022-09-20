const mario = document.querySelector('.mario');
const mariodead = document.querySelector('.mario');
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
    const mariodeadPosition = mario.offsetLeft;
    const grassPosition = mario.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (marioPosition < 330 && pipePosition <= 145 && pipePosition >=  97) {

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;
        block.style.animation = 'none';
        block.style.left = `${blockPosition}px`;
        grass.style.animation = 'none';
        grass.style.left = `${grassPosition}px`;
        tubo.style.animation = 'none';
        tubo.style.left = `${pipePosition}px`;



        mario.src = './images/game-over.png';
        mario.classList.add('dead');

        clearInterval(loop);

        setTimeout(() => {
        document.location.reload(true)
    }, 850)

    }
}, 10);

document.addEventListener('keydown', jump);
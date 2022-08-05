const mario = document.querySelector('.mario');
const JUMP = 'jump';

const jump = (event) => {

    
    console.log(event.keyCode)

    if(event.keyCode === 32){
    mario.classList.add(JUMP)

    setTimeout(()=>{
        mario.classList.remove(JUMP)
    }, 500)
    }
}

document.addEventListener('keydown', jump)
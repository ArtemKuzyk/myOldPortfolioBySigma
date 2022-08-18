let bodyElement = document.querySelector('body');
let animationContent = document.querySelectorAll('body > *');
const startAnimationElement = document.querySelector('body .start-animation');  
const animationItem = document.querySelector('.start-animation__item_square');  
const html = document.querySelector('html');  

function startAnimaton(){

    for (let i = 0; i < animationContent.length; i++) {
        if(animationContent[i] == startAnimationElement){
            startAnimationElement.style.display = 'flex';
            continue;
        } 
        animationContent[i].style.display = 'none';
    } 
    bodyElement.style.background = '#20ac20';
    bodyElement.style.height = '100%';
    html.style.height = '100%';
    setTimeout(() => {
        for (let i = 0; i < animationContent.length; i++) {
            animationContent[i].style.display = '';
        }
        bodyElement.style.background = '';
        bodyElement.style.height = '';
        startAnimationElement.style.display = 'none';
        animationItem.style.animation = '';
    }, 5000);
}

window.onload = function(){
startAnimaton();
}

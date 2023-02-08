function sleepTime(){
    let time, closeTime;
    let dsiactiveBodyElement = document.querySelector('body');
    let dsiactiveContentElement = document.querySelectorAll('body > *');
    let presentQuestion = document.querySelector('.activeQuestion');

    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keypress', resetTimer);
    document.addEventListener('click', resetTimer);

    function resetTimer() {
        clearTimeout(time);
        clearTimeout(closeTime);
        displayContent();
        time = setTimeout(question, (60*1000));
    }

    function displayContent(){
        
        for (let i = 0; i < dsiactiveContentElement.length; i++) {
            if(dsiactiveContentElement[i] == presentQuestion){
                dsiactiveContentElement[i].style.display = 'none';
                continue;
            }
            dsiactiveContentElement[i].style.display = '';
        }
        dsiactiveBodyElement.style.height = '';
    }

    function question() {

        for (let i = 0; i < dsiactiveContentElement.length; i++) {
            if(dsiactiveContentElement[i] == presentQuestion){
                dsiactiveContentElement[i].style.display = 'flex';
                continue;
            } 
            dsiactiveContentElement[i].style.display = 'none';
        } 
        dsiactiveBodyElement.style.height = '100vh';
        closeTime  = setTimeout(window.close, 10000);
    }
}

document.addEventListener('DOMContentLoaded', () => { sleepTime();});
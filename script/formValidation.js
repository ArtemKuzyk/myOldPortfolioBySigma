const inputUserNameInfoField = document.querySelector("#userNameInfo");
const inputEmailField = document.querySelector("#email");
const inputSubjectField = document.querySelector("#subject");
const inputMassageField = document.querySelector("#massage");
const formFields = document.querySelector('form');

let body = document.querySelector('body');
let content = document.querySelectorAll('body > *');
const animation = document.querySelector('body .contactMeAnimation');

function chekValidation(){
    let name = chekUserNameValidation();
    if(!name){
        inputUserNameInfoField.style.backgroundColor = '#ffff00';
        inputUserNameInfoField.style.color = '#ff0000';
        alert('Поле Nаme заповнено не коректно');   
    }else{
        inputUserNameInfoField.style.backgroundColor = '#fff';
        inputUserNameInfoField.style.color= 'var(--main-textcolor-always-gray)';
    }
    let email = chekEmailValidation();
    if (!email){
        inputEmailField.style.backgroundColor = '#ffff00';
        inputEmailField.style.color = '#ff0000';
        alert('Поле Email заповнено не коректно');
    }else{
        inputEmailField.style.backgroundColor = '#fff';
        inputEmailField.style.color= 'var(--main-textcolor-always-gray)';
    }
    let subject = chekSubjectValidation();
    if (!subject){
        inputSubjectField.style.backgroundColor = '#ffff00';
        inputSubjectField.style.color = '#ff0000';
        alert('Поле Subject заповнено не коректно');
    }else{
        inputSubjectField.style.backgroundColor = '#fff';
        inputSubjectField.style.color= 'var(--main-textcolor-always-gray)';
    }
    if(name && email && subject){
        localStorage.setItem('ClientContactMeFormInfo', 
        {
        name: inputUserNameInfoField.value,
        email: inputEmailField.value,
        subject: inputSubjectField.value,
        massage: inputMassageField.value
        });
        if(inputSubjectField.value.match(/Зробити замовлення/i)){
            setOrderedAnimaton();
        }
    }
}

function chekUserNameValidation(){
    let name = inputUserNameInfoField.value;
    firstUpperLetter = /^[A-Z]/; 
    if(!firstUpperLetter.test(name)) return false;
    let validLetters = /[0-9 ]/; 
    if(validLetters.test(name)) return false;
    return true;
}

function chekEmailValidation(){
    let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return regex.test(inputEmailField.value.toLowerCase());
}

function chekSubjectValidation(){
    letters = /^[A-Za-z А-Яа-я]+$/;
    return letters.test(inputSubjectField.value) ? true : false;
}

function setOrderedAnimaton(){

    setTimeout(() => {
        for (let i = 0; i < content.length; i++) {
            if(content[i] == animation){
                animation.style.display = 'block';
                continue;
            } 
            content[i].style.display = 'none';
        } 
        body.style.background = '#000';
        animation.style.animation = 'contactMeAnimation linear 3s 3';
    }, 2000)
    
    setTimeout(() => {
        for (let i = 0; i < content.length; i++) {
            content[i].style.display = '';
        }
        body.style.background = '';
        animation.style.display = 'none';
        animation.style.animation = '';
    }, 12000);
}

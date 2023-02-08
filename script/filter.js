const showItem = document.querySelector('.item');
// const activeFilter = document.querySelectorAll('.active-filter');
filterSelection("all");
let showElements = ['all'];
const portfolioItem = document.querySelectorAll(".projects > .item");

function filterSelection(displayValue) {
    let portfolioItem = document.querySelectorAll(".projects > .item");
    let activeFilter = document.querySelectorAll('.active-filter');
    let filterAddEventButton = document.querySelectorAll(".filter__checkbox");
    if (displayValue == "all"){
        displayValue = "";
        for (let i = 0; i < activeFilter.length; i++) {
                activeFilter[i].className = activeFilter[i].className.replace(" active-filter", "");
                showElements = 'all';
        }
        for(let i = 0; i < filterAddEventButton.length; i++){
            filterAddEventButton[i].addEventListener('click', addClassName);
        }
    } 
    for (let i = 0; i < portfolioItem.length; i++) {
        removeShowClass(portfolioItem[i], "show");
        if (portfolioItem[i].className.indexOf(displayValue) > -1) addShowClass(portfolioItem[i], "show");
    }
}

function addShowClass(element, name) {
    let arr1 = element.className.split(" ");
    if (arr1.indexOf(name) == -1){
        element.className += " " + name;
    }
}

function removeShowClass(element, name) {
    let arr1 = element.className.split(" ");
    while(arr1.indexOf(name) > -1) {
        arr1.splice(arr1.indexOf(name), 1);
    }
    element.className = arr1.join(" ");
}

// let filterRemoveEventButton = document.querySelectorAll(".active-filter");
// for(let i = 0; i < filterRemoveEventButton.length; i++){
//     filterRemoveEventButton[i].addEventListener('click', removeClassName);
// }

let currentElement = true;
function removeClassName(){
    let arrClass = this.className.split(" ");
    if(arrClass.indexOf("active-filter") != -1) {
        if(existElement.indexOf("active-filter") == -1){
            existElement = arrClass.map((x) => x);
            return;
        } 
        for (let i = 0; i < portfolioItem.length; i++) {
            if(portfolioItem[i].classList.contains(this.innerText)){
                removeShowClass(portfolioItem[i], "show");
            }
        }
        this.className = this.className.replace(" active-filter", "");
        this.removeEventListener('click', removeClassName);
        this.addEventListener('click', addClassName);
        existElement = "";
        currentElement = false;
    }
}

let filterAddEventButton = document.querySelectorAll(".filter__checkbox");
for(let i = 0; i < filterAddEventButton.length; i++){
    filterAddEventButton[i].addEventListener('click', addClassName);
}
   
let existElement;
function addClassName(){
    if(!currentElement) {
        currentElement = true;
        return;
    }
    if(showElements.includes('all')){
        for (let i = 0; i < portfolioItem.length; i++) {
            removeShowClass(portfolioItem[i], "show");
            showElements = '';
        }
    }
    for (let i = 0; i < portfolioItem.length; i++) {
        if(portfolioItem[i].classList.contains(this.innerText)){
            addShowClass(portfolioItem[i], "show");
        }
    }
    let arrClass = this.className.split(" ");
    existElement = arrClass.map((x) => x);
    if(arrClass.indexOf("active-filter") == -1) {
        this.className += " active-filter";
        this.removeEventListener('click', addClassName);
        this.addEventListener('click', removeClassName);
    }
}





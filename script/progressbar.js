const progressline = document.querySelector(".progress-bar__line");
    
window.addEventListener("scroll", setProgressLine);
window.addEventListener("resize", setProgressLine);

function setProgressLine(){
    let currentScrollHeight = document.body.scrollHeight; //можна зробити одним рядком всю функцію
    let currentWindowHeight = window.innerHeight;

    progressline.style.width = (window.pageYOffset * 100 / (currentScrollHeight - currentWindowHeight)) + "%";
}
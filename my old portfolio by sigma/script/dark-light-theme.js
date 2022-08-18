const darkLightButton = document.querySelector('.dark-light-icon');

const clientTime = new Date().getHours(); 
// const clientTime = 23;
if(clientTime > 21 || clientTime < 6){
  localStorage.setItem('theme', 'dark');
  addDarkClassToHTML();
}

darkLightButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    }
    else {
      localStorage.setItem('theme', 'dark');
    }
    addDarkClassToHTML();
  });
  
function addDarkClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.add('dark');
        }
        else {
            document.querySelector('html').classList.remove('dark');
        }
    } catch (err) { }
}
  
  addDarkClassToHTML();
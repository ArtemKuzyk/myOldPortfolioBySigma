const APIElement = document.querySelector('.apiForm');

function weathrAPI(){
  try {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=50.4501&lon=30.5234&appid=af6092d9613b9e391ad59a22bdc92c96`)
      .then(response => response.json())
      .then(data => {console.log(data);
      let celcius = Math.floor(data['main']['temp'] - 273.15);
      APIElement.innerHTML = `${celcius} по цельсію`});
  } catch (error) {}

}

weathrAPI();

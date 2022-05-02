const API_KEY = "7b2e25c8c2fe8efbbc786ba2bec4891f";
const URL_WEATHER_MAP = "https://api.openweathermap.org/data/2.5/weather";
 
 const button = document.getElementById('sendButton');
 const inputElement = document.getElementById('search');
 const resultsContainer = document.getElementById('details');
 const main = document.getElementById('principal');

 button.addEventListener("click", ()=>{
  const valorDeInput = inputElement.value;

    if (inputElement.value.length == 0){
      alert('Por favor escriba el nombre de una ciudad');
    }else {
      fetchWeather(valorDeInput);
      inputElement.value="";
   
    };
    
 });



function renderWeather(weather) {
   console.log(weather);


   let ciudad = weather.name;

   let tempMax = weather.main.temp_max;


   let tempMin =  weather.main.temp_min; 
   const {icon} = weather.weather[0];
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";

   let hum =  weather.main.humidity; 

   let term =  weather.main.feels_like; 

   let pressure =  weather.main.pressure; 

   let speed =  weather.wind.speed; 

   let img = weather.weather [0].main;
  main.innerHTML =`<h3> ${ciudad} </h3>  <p class="maxima"> <strong>${tempMax} °C</strong> <span> / </span><strong>${tempMin} °C </strong></p> `;
  resultsContainer.innerHTML = `
<p><span> Humedad: </span><strong> ${hum} %</strong> </p> <p> <span> Sensación térmica: </span><strong>${term}</strong>  </p> <p> <span> Presión: </span><strong>${pressure}</strong>  </p> <p><span>Velocidad del viento: </span><strong> ${speed} mph</strong>  </p>`
  
let videoID = "VYUxvC4PAcQ";
 if (weather.weather[0].main == "Clouds") {
  videoID = "euWoxhUkf_w";
 } else if (weather.weather[0].main == "Clear") {
  videoID = "MBPm980LOsQ";
 }

player.loadVideoById(videoID);

}
function fetchWeather(ciudad) {

fetch (`${URL_WEATHER_MAP}?q=${ciudad}&units=metric&appid=${API_KEY}`)
.then(response => response.json())
      .then(data => renderWeather(data)).catch(function(err){
        console.log("Something went wrong",err);
    });
    }
  const id_video ='7eJq_o2bvtw'
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        
        height: '800',
        width: '1530',
        videoId: id_video,
        playeVars: {'autoplay':1, 'controls':0, 'showinfo':0,'end':100, 'loop':1},

        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }



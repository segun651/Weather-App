let notification = document.querySelector(".notification")
let temperatureicon = document.querySelector(".temperatureicon")
let temperature = document.querySelector(".temperatures")
let temperaturedesc = document.querySelector(".temperaturedesc")
let country = document.querySelector(".country")
let alerts = document.querySelector(".alert")
let data = ''
   
 temperature.addEventListener("click",changetemperature)
const weatherunit = {
   celsius : "C",
   kelvin : "K",
   farheneit : "F"
}
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition,showError)
    } 
    if (!navigator.geolocation) {
    notification.innerHTML += "Geolocation is not supported by this browser."
    }

    function showPosition(position) {
      let latitude = position.coords.latitude 
    let longitude = position.coords.longitude
    getWeather(latitude,longitude)
      }
  
      function showError(error){
        notification.innerHTML = `${error.message}`
      }
      function getWeather(latitude,longitude) {
        let key = '82005d27a116c2880c8f0fcb866998a0'
let api = `https:/api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
  fetch(api)
  .then(response => response.json())
  .then(data => displayWeather(data))
  
 
      }
       let degree = ''
      function displayWeather(data) {
 degree = data.main.temp
   console.log(data)
   alerts.innerHTML = "<p  style='font-size: 12px;'>Click on temperature to change degrees.</p>"
    temperature.innerHTML = Math.floor(degree -273) + "°" + `C` 
    temperaturedesc.innerHTML = `<h3>${data.weather[0].description}</h3>`
    country.innerHTML = `${data.sys.country}, ${data.name}`
    temperatureicon.innerHTML = `<img src= "http://openweathermap.org/img/w//${data.weather[0].icon}.png" alt = "img" > `
   
      }
    
      
    function changetemperature(e) {
      if(e.target.innerHTML == Math.floor(degree -273) + "°" + `C`){
        e.target.innerHTML = Math.floor(degree) + "°" + `K`
      }
      else if(e.target.innerHTML == Math.floor(degree) + "°" + `K` ) {
        e.target.innerHTML = Math.floor(degree * 9/5) + 32 + "°" + `F`
      }
      else {
        e.target.innerHTML = Math.floor(degree -273) + "°" + `C`
      }
      
    }
      

      let circleSlide = document.querySelector(".circleslide")
        let body = document.querySelector("body")
      circleSlide.addEventListener("click",slide)

      function slide() {
          body.classList.toggle("darktheme")
          
          circleSlide.classList.toggle("position")
      }

    
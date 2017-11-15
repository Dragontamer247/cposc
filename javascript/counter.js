//Creates two dates, the first one is the day the next event takes place, the other is the time right now.
var eventDate = new Date("Nov 1, 2018");
var dateNow = new Date();
//distance subtracts the date from the event witht the current time so time until the next event is calculated.
var distance = eventDate - dateNow;
//daysConvert converts the date from days by dividing out the miliseconds, seconds, minutes, and hours so the days are the only one left.
var daysConvert = Math.floor(distance / (1000 * 60 * 60 * 24));
//convertString takes the daysConvert and turns the value into a readable string, for some reason you cannot take the integer from the daysConvert and turn it into an array, but this extra step prevents it from becomming broken.
var convertString = daysConvert.toString();
//The documents take the element ID of box and uses the segment of the string from daysConvert. each [] symbolizes the position of each number in the string its taking the data from.
document.getElementById("boxOne").innerHTML = convertString[0];
document.getElementById("boxTwo").innerHTML = convertString[1];
document.getElementById("boxThree").innerHTML = convertString[2];
//////////////////////////////////////////////////////////////
//Google API
function initMap() {
        var wareCenter = {lat: 40.038877, lng: -76.308338};
        var map = new google.maps.Map(document.getElementsByTagName('google-map'), {
          zoom: 16,
          center: wareCenter });
        var marker = new google.maps.Marker({
          position: wareCenter,
          map: map });
      }

/////////////////////////////////////////////////////////////////
const button = document.querySelector('.button')
const sidebar = document.querySelector('.sidebar')

button.addEventListener('click', function () {
  sidebar.classList.toggle('hidden')
})
/////////////////////////////////////

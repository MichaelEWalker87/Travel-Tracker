import Destinations from './trips';
import Travelers from './travelers';
import Trips from './trips';
import api from './api'


let username = document.querySelector(".username");//not being used yet
let password = document.querySelector(".password");//not being used yet
let loginButton = document.querySelector(".login-button");//not being used yet
let loginMobileBackground = document.querySelector(".whole-filter-section");//not being used yet
let loginSection = document.querySelector(".main-login");//not being used yet
let homePage = document.querySelector(".home");//not being used yet
let presentPage = document.querySelector(".present");//not being used yet
let futurePage = document.querySelector(".future");//not being used yet
let pastPage = document.querySelector(".past");//not being used yet
let pendingPage = document.querySelector(".pending");//not being used yet
let allIcons = document.querySelectorAll(".icon");//not being used yet
let mobileIcons = document.querySelector(".moblie");//not being used yet
let destinationPicker = document.querySelector(".destination-picker");//not being used yet
let travelersNumberPicker = document.querySelector(".travelers-number-picker");//not being used yet
let travelersDurationPicker = document.querySelector(".travelers-duration-slider");//not being used yet
let submitTrip = document.querySelector(".submit-trip");//not being used yet


window.addEventListener('load', onLoad);
allIcons.addEventListener('click', );
loginButton.addEventListener('click', );


selectIcon(event) => {
  let pickIcon = event.target.closest('.icon');
}

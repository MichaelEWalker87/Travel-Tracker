// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import Destinations from './trips';
import Travelers from './travelers';
import Trips from './trips';
import api from './api';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/beer.png'
import './images/hop.png'
import './images/Desert.jpg'
import './images/honghong.jpg'
import './images/honghong.jpg'
import './images/Moutaintrain.png'
import './images/new-york-city.jpg'
import './images/Nightmountian.jpg'
import './images/Outdoor.jpg'
import './images/paris-eiffel-tower.jpg'
import './images/pyramid-egypt.jpg'
import './images/Seattle.jpg'
import './images/present.png'
import './images/pending.png'
import './images/past.png'
import './images/order.png'
import './images/home.png'
import './images/future.png'
import './images/burger.png'


// console.log('This is the JavaScript entry file - your code begins here.');


let allTravelers;
let oneTraveler;
let allTrips;
let allDestinations;
let currentTraveler;
let tripsData;

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
let allIcons = document.querySelector(".header-section");//not being used yet
let mobileIcons = document.querySelector(".moblie");//not being used yet
let destinationPicker = document.querySelector(".destination-picker");//not being used yet
let travelersNumberPicker = document.querySelector(".travelers-number-picker");//not being used yet
let travelersDurationPicker = document.querySelector(".travelers-duration-slider");//not being used yet
let calenderPicker = document.querySelector(".calender");
let submitTrip = document.querySelector(".submit-trip");//not being used yet



let onLoadContent = () => {
  let promise1 = api.getTravelers()
  let promise2 = api.getOneTraveler()
  let promise3 = api.getAllTrips()
  let promise4 = api.getAllDestinations()
  Promise.all([promise1, promise2, promise3, promise4])
    .then(values => {
      allTravelers = values[0];
      oneTraveler = values[1];
      allTrips = values[2];
      allDestinations = values[3];
      generateTraveler();
      generateDestination();
      generateTrips();
    })
}


let generateTraveler = () =>{
  let currentTraveler = new Travelers(oneTraveler)
}

let generateDestination = () =>{
  let finalDestination = allDestinations.destinations.reduce((totalDestination, destination) =>{
    let  currentDestination = new Destinations(destination);
    totalDestination.push(currentDestination)
    return totalDestination
  }, [])
  allDestinations = finalDestination;
}

let generateTrips = () => {
  let allTripStats = allTrips.trips.reduce((tripsData, trip) => {
    let currentTrip = new Trips(trip)
    tripsData.push(currentTrip)
    return tripsData
  }, []);
  tripsData = allTripStats;
}

let getData = () => {

}


let setDestinationPicker = () => {

}

let captureSubmitedData = () => {
  let calenderDate = calenderPicker.value.split("-")
  let formatedDate = calenderDate.join("/")
return {
          id: Date.now(),
          userID: 2,
          destinationID: parseInt(destinationPicker.value),
          travelers: parseInt(travelersNumberPicker.value),
          date: formatedDate,
          duration: parseInt(travelersDurationPicker.value),
          status: 'pending',
          suggestedActivities: []
        }
}

let submitRequest = () => {
  let newTrip = captureSubmitedData();
  console.log(newTrip)
  api.addTrip(newTrip)
    .then(response => console.log(response));
  //I want to capture the value of the input for the form feilds in the home page
  // calender
  //days
  //travelers
  //destination
  //Post it
  //get data
  //update the current instations of trip
  //redisplay
}


let selectNavIcon = () => {
  if(event.target.classList.contains('present-trips')) {
    console.log("present-trips")
  } else if (event.target.classList.contains('home-page')) {
    console.log("home-page")
  } else if (event.target.classList.contains('future-trips')) {
    console.log("future-trips")
  } else if (event.target.classList.contains('pending-trips')) {
    console.log("pending-trips")
  } else if (event.target.classList.contains('past-trips')) {
    console.log("past-trips")
  } else if (event.target.classList.contains('moblie-icon')) {
    console.log("moblie-icon")
  }
}

window.addEventListener('load', onLoadContent);
allIcons.addEventListener('click', selectNavIcon);
// loginButton.addEventListener('click', );
// submitTrip.addEventListener('click', submitRequest);

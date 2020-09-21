// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import Destinations from './destinations';
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
      populatePresentPage();
    })
}


let generateTraveler = () =>{
  currentTraveler = new Travelers(oneTraveler)
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

let populatePresentPage = () => {
  currentTraveler.loadTravelerPresent(tripsData);
  currentTraveler.present.forEach((trip) => {
    let currentDestinationImg = allDestinations.find((destination) => {
      // console.log(destination)
      return trip.destinationID === destination.id
    })
    trip.calculatePrice(allDestinations);
    let durationCount
    let travelerCount
    if (trip.duration >= 2) {
      durationCount = "days of travling fun!"
    } else {
      durationCount = "day quick get away!"
    }
    if (trip.travelers >= 2) {
      travelerCount = "in your party of travelers!"
    } else {
      travelerCount = "awesome solo traveler!"
    }
    presentPage.innerHTML +=
      `<section class="trip-cards">
        <section class="trip-card-text">
          <p class="populated-trip-price">
            The estimated cost of the trip is $${trip.price.toFixed(2)}
          </p>
          <p class="populated-trip-status">
            Your trip status is ${trip.status}
          </p>
          <p class="populated-trip-duration">
            The durtation of your trip is: ${trip.duration}
          </p>
          <p class="populated-trip-date">
            You take off on ${trip.date}
          </p>
          <p class="populated-trip-travelers">
            You have set this for: ${trip.travelers} ${travelerCount}
          </p>
        </section>
        <img src= ${currentDestinationImg.image}
          alt= ${currentDestinationImg.destination}
          class="populated-trip-image"
        >
      </section>
      `
  });
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
  api.addTrip(newTrip)
    .then(response => response);
     allTrips = api.getAllTrips();
     generateTrips();
}

let selectPresentTripsIcon = () => {
  homePage.classList.add("hidden");
  futurePage.classList.add("hidden");
  pastPage.classList.add("hidden");
  pendingPage.classList.add("hidden");
  presentPage.classList.remove("hidden");
}

let selectFutureTripsIcon = () => {
  homePage.classList.add("hidden");
  futurePage.classList.remove("hidden");
  pastPage.classList.add("hidden");
  pendingPage.classList.add("hidden");
  presentPage.classList.add("hidden");
}

let selectPastTripsIcon = () => {
  homePage.classList.add("hidden");
  futurePage.classList.add("hidden");
  pastPage.classList.remove("hidden");
  pendingPage.classList.add("hidden");
  presentPage.classList.add("hidden");
}

let selectPendingTripsIcon = () => {
  homePage.classList.add("hidden");
  futurePage.classList.add("hidden");
  pastPage.classList.add("hidden");
  pendingPage.classList.remove("hidden");
  presentPage.classList.add("hidden");
}

let selectHomePageIcon = () => {
  homePage.classList.remove("hidden");
  futurePage.classList.add("hidden");
  pastPage.classList.add("hidden");
  pendingPage.classList.add("hidden");
  presentPage.classList.add("hidden");
}

let selectNavIcon = () => {
  if(event.target.classList.contains('present-trips')) {
    selectPresentTripsIcon();
  } else if (event.target.classList.contains('home-page')) {
    selectHomePageIcon();
  } else if (event.target.classList.contains('future-trips')) {
    selectFutureTripsIcon();
  } else if (event.target.classList.contains('pending-trips')) {
    selectPendingTripsIcon();
  } else if (event.target.classList.contains('past-trips')) {
    selectPastTripsIcon();
  } else if (event.target.classList.contains('moblie-icon')) {
    console.log("moblie-icon")
  }
}

window.addEventListener('load', onLoadContent);
allIcons.addEventListener('click', selectNavIcon);
// loginButton.addEventListener('click', );
submitTrip.addEventListener('click', submitRequest);

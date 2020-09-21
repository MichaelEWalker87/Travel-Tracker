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
let present = document.querySelector(".present");//not being used yet
let upcoming = document.querySelector(".upcoming");//not being used yet
let past = document.querySelector(".past");//not being used yet
let pending = document.querySelector(".pending");//not being used yet
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
      populateHomeGreating();
      generateDestinationPicker();
      populateAllTitles();
      populateAllPages();
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

let populateHomeGreating = () =>{
    homePage.insertAdjacentHTML("afterbegin",
      `<section class="page-header welcome-header">
        <h2 class="page-title-text">
          Welcome Beer Traveler ${currentTraveler.name.split(" ")[0]} Book Your Next Adventure Below
        </h2>
       </section>`
    )
}

let populateAllTitles = () =>{
  let allCardPages = ["present", "upcoming", "past", "pending"];
  allCardPages.forEach((page) => {
    let targetDomObject = document.querySelector(`.${page}`)
    targetDomObject.innerHTML +=
      `<section class="page-header">
        <h2 class="page-title-text">
          Beer Traveler ${currentTraveler.name.split(" ")[0]}
          This is Your ${page.charAt(0).toUpperCase() + page.slice(1)} Trips
        </h2>
       </section>`
  })
}

let generateDestinationPicker = () => {
  allDestinations.forEach((destinations, i) => {
    if(destinations.destination !== "Rome, Italy")
    destinationPicker.insertAdjacentHTML("afterbegin",
      `<option value=${destinations.id}>${destinations.destination}</option>`
    )
  });
}


let populateAllPages = () => {
  let allCardPages = ["present", "upcoming", "past", "pending"];
  let currentDestinationImg;
  console.log(currentTraveler.name.split(" ")[0])
  currentTraveler.getUserTripData(tripsData);
  currentTraveler.loadTravelerPresent(tripsData);
  currentTraveler.loadTravelerPast(tripsData);
  currentTraveler.loadTravelerPending(tripsData);
  currentTraveler.loadTravelerUpcoming(tripsData);
  allCardPages.forEach((page) => {
    let targetDomObject = document.querySelector(`.${page}`)
    if(currentTraveler[page].length >= 1) {
      currentTraveler[page].forEach((trip) => {
        currentDestinationImg = allDestinations.find((destination) => {
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
        targetDomObject.innerHTML +=
          `<section class="trip-cards">
            <section class="trip-card-text">
              <h3 class="populated-trip-price">
                ${currentDestinationImg.destination}
              </h3>
              <p class="populated-trip-price">
                The estimated cost of the trip is $${trip.price.toFixed(2)}
              </p>
              <p class="populated-trip-status">
                Your trip status is in ${trip.status} status
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
    } else {
      targetDomObject.innerHTML +=
        `<section class="no-cards">
            <p class="no-populated">
              OH NOOO!!! <br> YOU HAVE NO ${page.toUpperCase()} TRIPS
              <br> DON’T WORRY BE HOPPY AND
              BOOK NOW!
            </p>
          </section>
        `
    }
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
  upcoming.classList.add("hidden");
  past.classList.add("hidden");
  pending.classList.add("hidden");
  present.classList.remove("hidden");
}

let selectFutureTripsIcon = () => {
  homePage.classList.add("hidden");
  upcoming.classList.remove("hidden");
  past.classList.add("hidden");
  pending.classList.add("hidden");
  present.classList.add("hidden");
}

let selectPastTripsIcon = () => {
  homePage.classList.add("hidden");
  past.classList.remove("hidden");
  pending.classList.add("hidden");
  present.classList.add("hidden");
  upcoming.classList.add("hidden");
}

let selectPendingTripsIcon = () => {
  homePage.classList.add("hidden");
  upcoming.classList.add("hidden");
  past.classList.add("hidden");
  pending.classList.remove("hidden");
  present.classList.add("hidden");
}

let selectHomePageIcon = () => {
  homePage.classList.remove("hidden");
  upcoming.classList.add("hidden");
  past.classList.add("hidden");
  pending.classList.add("hidden");
  present.classList.add("hidden");
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

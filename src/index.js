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
let allDestinations;
let currentTraveler;
let tripsData = [];
let userNumber = 2;

let username = document.querySelector(".username");//not being used yet
let password = document.querySelector(".password");//not being used yet
let loginButton = document.querySelector(".login-button");//not being used yet
let loginMobileBackground = document.querySelector(".whole-filter-section");//not being used yet
let loginSection = document.querySelector(".main-login");//not being used yet
let homePage = document.querySelector(".home");
let present = document.querySelector(".present");
let upcoming = document.querySelector(".upcoming");
let past = document.querySelector(".past");
let pending = document.querySelector(".pending");
let allIcons = document.querySelector(".header-section");
let mobileIcons = document.querySelector(".moblie");//not being used yet
let destinationPicker = document.querySelector(".destination-picker");
let travelersNumberPicker = document.querySelector(".travelers-number-picker");
let travelersDurationPicker = document.querySelector(".travelers-duration-slider");
let calenderPicker = document.querySelector(".calender");
let submitTrip = document.querySelector(".submit-trip");
let submitEstimate = document.querySelector(".submit-estimate");


let retrieveData = (event) => {
  api.getAllServerData(userNumber, event)
  .then(values => {
    allTravelers = values[0];
    oneTraveler = values[1];
    values[2].trips.forEach((trip) => {
      let usersTrips = new Trips(trip);
      tripsData.push(usersTrips)
    });
    allDestinations = values[3];
    generateTraveler();
    generateDestination();
    populateHomeGreating();
    generateDestinationPicker();
    populateAllPages();
    populateYearlyCost();
  })
  .catch(err => console.log(err));
}

let addDisplayLogin = () => {
  loginMobileBackground.classList.remove("hidden");
  loginSection.classList.remove("hidden");
  homePage.classList.add("hidden");
}

let removeDisplayLogin = () => {
  loginMobileBackground.classList.add("hidden");
  loginSection.classList.add("hidden");
  homePage.classList.remove("hidden");
}

let verifyLogin = () => {
  const userString = username.value.split('traveler');
  userNumber = parseInt(userString[1])
  if (password.value === "travel2020" && userString[0] === "" && userNumber <= 50 && userNumber >= 1) {
    removeDisplayLogin();
    retrieveData(userNumber);
    return userNumber
  } else {
    alert("You have entered the wrong password or username please try again")
  }
}


let generateTraveler = () => {
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

let populateHomeGreating = () =>{
  let pageTitleText = document.querySelector(".page-title-text");
  pageTitleText.innerText =
    `Welcome Beer Traveler ${currentTraveler.name.split(" ")[0]} Book Your Next Adventure Below
    `
}

let populateYearlyCost = () =>{
  let yearlyCostText = document.querySelector(".yearly-cost-text");
  currentTraveler.calculateTravelersTotalPrice(allDestinations)
  yearlyCostText.innerHTML =
    `Your estimated annu-Ale travling cost is <br>
      $${currentTraveler.travelersTotal.toFixed(2)}
    `
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
  currentTraveler.getUserTripData(tripsData);
  currentTraveler.loadTravelerPresent(tripsData);
  currentTraveler.loadTravelerPast(tripsData);
  currentTraveler.loadTravelerPending(tripsData);
  currentTraveler.loadTravelerUpcoming(tripsData);
  allCardPages.forEach((page, i) => {
    let targetDomObject = document.querySelector(`.${page}`)
      targetDomObject.innerHTML = ""
  });
  populateAllTitles();
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
        targetDomObject.insertAdjacentHTML('beforeend',
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
        )
      });
    } else {
      targetDomObject.insertAdjacentHTML('beforeend',
        `<section class="no-cards">
            <p class="no-populated">
              OH NOOO!!! <br> YOU HAVE NO ${page.toUpperCase()} TRIPS
              <br> DON’T WORRY BE HOPPY AND
              BOOK NOW!
            </p>
          </section>
        `
      )
    }
  });
}

let captureSubmitedData = () => {
  let calenderDate = calenderPicker.value.split("-")
  let formatedDate = calenderDate.join("/")
  let currentDay = new Date(Date.now())
  let calenderCheck = new Date(formatedDate)
  if (calenderCheck > currentDay) {
    return {
      id: Date.now(),
      userID: currentTraveler.id,
      destinationID: parseInt(destinationPicker.value),
      travelers: parseInt(travelersNumberPicker.value),
      date: formatedDate,
      duration: parseInt(travelersDurationPicker.value),
      status: 'pending',
      suggestedActivities: []
    }
  } else {
    submitEstimate.classList.remove("hidden");
    submitTrip.classList.add("hidden");
    alert("You have entered an invailed date please try again")
  }
}

let clearSubmittedData = () => {
  tripsData = [];
  currentTraveler.userTotalTrips = [];
  currentTraveler.past = [];
  currentTraveler.present = [];
  currentTraveler.upcoming = [];
  currentTraveler.pending = [];
}

let displaySumbittedEstimate = () => {
  let submitedTripPrice = document.querySelector(".submited-trip-price");
  submitEstimate.classList.add("hidden");
  submitTrip.classList.remove("hidden");
  let selectedDestination = allDestinations.find((destination) => {
    return parseInt(destinationPicker.value) === destination.id
  })
  let currentTrip = new Trips(captureSubmitedData())
  currentTrip.calculatePrice(allDestinations)
  submitedTripPrice.innerText =
    `  Your Adventure to ${selectedDestination.destination} is estimated cost is
        $${currentTrip.price.toFixed(2)} Clink Submit to request!
    `
}

let successfullSubmitMessage = (response) => {
  let submitedTripPrice = document.querySelector(".submited-trip-price");
  if(response.message.includes("successfully")) {
      submitedTripPrice.innerText =
        `
        Your Adventure has been submited, checkout your pending trips for details
        `
  } else {
    submitedTripPrice.innerText =
      `
        Opps something went wrong please call us at 555-867-53O9 and ask for Jenny
      `
  };
  submitEstimate.disabled = true;
}

let submitRequest = () => {

  submitEstimate.classList.add("hidden");
  submitTrip.classList.add("hidden");
  let newTrip = captureSubmitedData();
  api.addTrip(newTrip)
    .then(response => successfullSubmitMessage(response))
    .then(() => clearSubmittedData())
    .then(() => retrieveData())
}

let selectPresentTripsIcon = () => {
  document.body.style.backgroundImage = "url('./images/Seattle.jpg')";
  homePage.classList.add("hidden");
  upcoming.classList.add("hidden");
  past.classList.add("hidden");
  pending.classList.add("hidden");
  present.classList.remove("hidden");
}

let selectFutureTripsIcon = () => {
  document.body.style.backgroundImage = "url('./images/Outdoor.jpg')";
  homePage.classList.add("hidden");
  upcoming.classList.remove("hidden");
  past.classList.add("hidden");
  pending.classList.add("hidden");
  present.classList.add("hidden");
}

let selectPastTripsIcon = () => {
  document.body.style.backgroundImage = "url('./images/Desert.jpg')";
  homePage.classList.add("hidden");
  past.classList.remove("hidden");
  pending.classList.add("hidden");
  present.classList.add("hidden");
  upcoming.classList.add("hidden");
}

let selectPendingTripsIcon = () => {
  document.body.style.backgroundImage = "url('./images/new-york-city.jpg')";
  homePage.classList.add("hidden");
  upcoming.classList.add("hidden");
  past.classList.add("hidden");
  pending.classList.remove("hidden");
  present.classList.add("hidden");
}

let selectHomePageIcon = () => {
  document.body.style.backgroundImage = "url('./images/honghong.jpg')";
  homePage.classList.remove("hidden");
  upcoming.classList.add("hidden");
  past.classList.add("hidden");
  pending.classList.add("hidden");
  present.classList.add("hidden");
}

let loadLoginPage = () => {
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
    // console.log("moblie-icon")
  }
}

window.addEventListener('load', addDisplayLogin);
allIcons.addEventListener('click', selectNavIcon);
loginButton.addEventListener('click', verifyLogin);
submitTrip.addEventListener('click', submitRequest);
submitEstimate.addEventListener('click', displaySumbittedEstimate);

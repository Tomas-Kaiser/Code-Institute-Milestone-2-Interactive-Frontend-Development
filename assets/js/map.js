getVenues();

// Select radio option

let radio = $("input[type='radio']");
let querySelected = null;

radio.change(() => {
   let filteredRadio = radio.filter(":checked");
   querySelected = filteredRadio.val();
   console.log(querySelected)
});


$("#submitCity").on("click", (e) => {
   let cityName = "";
   let limitQuery = 20;
   let radiusSelected = 550;

   // Selected by ID name of city, how many venues you want to recommend, radius from the center
   cityName = $("#inputCity").val();
   limitQuery = $("#limit").val();
   radiusSelected = $("#radius").val();

   if (cityName != "") {
      e.preventDefault();

      // Reloading the map with new data
      $("#map").remove();
      $("#container-map").append('<div id="map"></div>');

      getVenues(cityName, limitQuery, radiusSelected, querySelected);
   }

   console.log(cityName)
})

// Foursquer API

function getVenues(cityName = null, limitQuery = 20, radiusSelected = 550, querySelected = null) {

   const endPoint = "https://api.foursquare.com/v2/venues/explore?";
   const client_id = "FHYZP5IIDLYMMWGXEGXQU0SDZANGGKMEIU1ZWFUCOINVQFWT";
   const client_secret = "350EQKKN5RFDLJEEMMRLQZ2ESRVNQUAEB2EAR2PYZWQWWPUF";
   const query = querySelected;
   const near = cityName;
   const v = 20180323;
   const limit = limitQuery;
   const radius = radiusSelected;

   // Getting data from foursquear via AJAX vith jQuery for better compatibility with browsers

   $.ajax({
      type: "GET",
      url: `${endPoint}client_id=${client_id}&client_secret=${client_secret}&v=${v}&limit=${limit}&near=${near}&radius=${radius}&query=${query}`,
      success: function(data) {
         let dataAPI = [];
         console.log(data)
         dataAPI = data.response.groups[0].items;
         console.log(dataAPI)
         getMap(dataAPI, cityName, querySelected)
      }
   });

/* Getting data from foursquear by Fetch

   fetch(`${endPoint}client_id=${client_id}&client_secret=${client_secret}&v=${v}&limit=${limit}&near=${near}&radius=${radius}&query=${query}`)
      .then(function (response) {
         // Code for handling API response
         return response.json();
      })
      .then(function (data) {
         let dataAPI = [];

         dataAPI = data.response.groups[0].items;
         console.log(dataAPI)
         getMap(dataAPI, cityName, querySelected)
      })
      .catch(function (error) {
         // Code for handling errors
         console.log("Error!!!" + error)
      });
*/
}

// Rendering the map

function getMap(dataAPI, cityName = null, querySelected) {

   // if input of city is empty, then set view Europe, else the selected city
   if (cityName === null) {
      var mymap = L.map('map').setView([50.058362, 14.454384], 5);
   } else {
      var mymap = L.map('map').setView([dataAPI[0].venue.location.lat, dataAPI[0].venue.location.lng], 13);
   }

   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoidG9tYXMta2Fpc2VyIiwiYSI6ImNqaWsxcXBlZjFzYXUzcG43d3Z3dzBnengifQ.mQDUjX4MQ49QWM-Yz4u19g'
   }).addTo(mymap);

   if (querySelected != null) {

   // Marker color
      var violetIcon = new L.Icon({
         iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
         shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
         iconSize: [25, 41],
         iconAnchor: [12, 41],
         popupAnchor: [1, -34],
         shadowSize: [41, 41]
       });
       
       
      dataAPI.map(myVenue => {
         var marker = L.marker([myVenue.venue.location.lat, myVenue.venue.location.lng], {icon: violetIcon}).addTo(mymap);
         marker.bindPopup(`
         <h4>${myVenue.venue.name}</h4>
         <p class="marker-p">Adress of venue:</p>
         <ul class="marker-ul">
            <li>${myVenue.venue.location.address}</li>
            <li>${myVenue.venue.location.city}</li>
            <li>${myVenue.venue.location.country}</li>
         </ul>
      `);
      });
   }
}
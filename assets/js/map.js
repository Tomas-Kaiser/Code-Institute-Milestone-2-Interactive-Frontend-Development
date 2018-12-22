getVenues();

function getMap(dataAPI) {

   var mymap = L.map('map').setView([50.058362, 14.454384], 12);

   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoidG9tYXMta2Fpc2VyIiwiYSI6ImNqaWsxcXBlZjFzYXUzcG43d3Z3dzBnengifQ.mQDUjX4MQ49QWM-Yz4u19g'
   }).addTo(mymap);
   
   var labels = "ABCDEFGHIJKLMNOPQRSTWXYZ" // It will appear on the makers

   dataAPI.map( myVenue => {
      var marker = L.marker([myVenue.venue.location.lat, myVenue.venue.location.lng]).addTo(mymap);
      marker.bindPopup(`
         <h4>${myVenue.venue.name}</h4>
      `);
   });
}


// Foursquer API
function getVenues() {

   const endPoint = "https://api.foursquare.com/v2/venues/explore?";
   const client_id = "FHYZP5IIDLYMMWGXEGXQU0SDZANGGKMEIU1ZWFUCOINVQFWT";
   const client_secret = "350EQKKN5RFDLJEEMMRLQZ2ESRVNQUAEB2EAR2PYZWQWWPUF";
   const query = "food";
   const near = "prague";
   const v = 20180323;

  fetch(`https://api.foursquare.com/v2/venues/explore?client_id=FHYZP5IIDLYMMWGXEGXQU0SDZANGGKMEIU1ZWFUCOINVQFWT&client_secret=350EQKKN5RFDLJEEMMRLQZ2ESRVNQUAEB2EAR2PYZWQWWPUF&v=20180323&limit=20&near=${near}&query=coffee`)
    .then(function(response) {
        // Code for handling API response
        return response.json();
    })
    .then(function(data) {
      let dataAPI = [];
      dataAPI = data.response.groups[0].items;
      console.log(dataAPI)
      getMap(dataAPI)
    })
    .catch(function(error) {
        // Code for handling errors
        console.log("Error!!!" + error)
    });
}



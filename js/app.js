const log = console.log;
log("NooreAzal Foundation");

// Map API Configuration
let map;
function initMap() {
  lahoreMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;

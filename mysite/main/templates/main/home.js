// var $toTop = $('.scroll');
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 100px) {
//         $toTop.fadeIn();
//     } else if ($toTop.is(':visible')) {
//         $toTop.fadeOut();
//     }
// });

// let content = document.getElementsByClassName('dropdownContent');
//


// $(document).ready(function(){
//   $("button").click(function(){
//     $(".explore").toggle());
//   });
// });



// $(function() {
//     $(".Hotels" ).click(function() {
//         $("#dropDownHotels").toggle();
//     });
//
//     $(".Attractions" ).click(function() {
//         $("#dropDownAttractions").toggle();
//     });
//
//     $(".Events" ).click(function() {
//         $("#dropDownEvents").toggle();
//     });
//
//     $(".Restaurants" ).click(function() {
//         $("#dropDownRestaurants").toggle();
//     });
//
// });

var markers = [];
var map;
var ritzCarlton;
var leCrystal;
var sofitelMontreal;
var leSaintJames;
var chateauVaudreuil;
var mountStephen;
var placeDarmes;
var gardenInn;
var leDauphin;
var interContinental;
var laRonde;
var mountRoyal;
var notreDame;
var olympicStadium;
var mountRoyalPark;
var oldMontreal;
var biosphereMuseum;
var glowParty;
var iglooFest;
var fireworks;
var lanZhou;
var imperial;
var deliceOriental;
var laBanquise;
var mooseBawr;
var orangeJulep;
var hotel="";

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 45.4857, lng:-73.5957}
  });
  directionsDisplay.setMap(map);

  ritzCarlton = {lat : 45.500, lng: -73.578};
  addMarker(ritzCarlton);
  leCrystal = {lat:45.497, lng: -73.573};
  addMarker(leCrystal);
  sofitelMontreal = {lat:45.5015, lng:-73.5774};
  addMarker(sofitelMontreal);
  // markers[2].push(marker);
  leSaintJames = {lat:45.5027, lng:-73.5596};
  addMarker(leSaintJames);
  // markers[3].push(marker);
  chateauVaudreuil = {lat:45.4161, lng:-74.0119};
  addMarker(chateauVaudreuil);
  // markers[4].push(marker);
  mountStephen = {lat:45.4991, lng:-73.5758};
  addMarker(mountStephen);
  // markers[5].push(marker);
  placeDarmes = {lat:45.5054, lng:-73.5574};
  addMarker(placeDarmes);
  // markers[6].push(marker);
  gardenInn = {lat:45.5076, lng:-73.5714};
  addMarker(gardenInn);
  // markers[7].push(marker);
  leDauphin = {lat:45.5043, lng:-73.5622};
  addMarker(leDauphin);
  // markers[8].push(marker);
  interContinental = {lat:45.5029, lng:-73.5604};
  addMarker(interContinental);
  // markers[9].push(marker);
  // setMapOnAll(null);
  laRonde = {lat:45.522, lng:-73.5346};
  addMarker(laRonde);
  mountRoyal = {lat:45.5071, lng:-73.5874};
  addMarker(mountRoyal);
  notreDame = {lat:45.5045, lng:-73.556};
  addMarker(notreDame);
  olympicStadium = {lat:45.558, lng:-73.5519};
  addMarker(olympicStadium);
  mountRoyalPark = {lat:45.505, lng:-73.5878};
  addMarker(mountRoyalPark);
  oldMontreal = {lat:45.5075, lng:-73.5544};
  addMarker(oldMontreal);
  biosphereMuseum = {lat:45.5139, lng:-73.5314};
  addMarker(biosphereMuseum);
  glowParty = {lat:45.4773, lng:-73.5927};
  addMarker(glowParty);
  iglooFest = {lat:45.5074, lng:-73.548};
  addMarker(iglooFest);
  fireworks = {lat:45.5043, lng:-73.5496};
  addMarker(fireworks);
  lanZhou = {lat:45.5078, lng:-73.5596};
  addMarker(lanZhou);
  imperial = {lat:45.5076, lng:-73.5594};
  addMarker(imperial);
  deliceOriental = {lat:45.4929, lng:-73.5801};
  addMarker(deliceOriental);
  laBanquise = {lat:45.5253, lng:-73.575};
  addMarker(laBanquise);
  mooseBawr = {lat:45.4936, lng:-73.5797};
  addMarker(mooseBawr);
  orangeJulep = {lat:45.4957, lng: -73.6567};
  addMarker(orangeJulep);



  $('#ritzCarlton').change(function() {
    if(this.checked) {
      markers[0].setMap(map);
      hotel = ritzCarlton;
      hotelcount ++;
    }
    else{
      markers[0].setMap(null);
    }
  });
  $('#leCrystal').change(function() {
    if(this.checked) {
      markers[1].setMap(map);
      hotel = leCrystal;
      hotelcount ++;
    }
    else{
      markers[1].setMap(null);
    }
  });
  $('#sofitelMontreal').change(function() {
    if(this.checked) {
      markers[2].setMap(map);
      hotel = sofitelMontreal;
    }
    else{
      markers[2].setMap(null);
    }
  });
  $('#leSaintJames').change(function() {
    if(this.checked) {
      markers[3].setMap(map);
      hotel = leSaintJames;
    }
    else{
      markers[3].setMap(null);
    }
  });
  $('#chateauVaudreuil').change(function() {
    if(this.checked) {
      markers[4].setMap(map);
      hotel = chateauVaudreuil;
    }
    else{
      markers[4].setMap(null);
    }
  });
  $('#mountStephen').change(function() {
    if(this.checked) {
      markers[5].setMap(map);
      hotel = mountStephen;
    }
    else{
      markers[5].setMap(null);
    }
  });
  $('#placeDarmes').change(function() {
    if(this.checked) {
      markers[6].setMap(map);
      hotel = placeDarmes;
      hotelcount ++;
    }
    else{
      markers[6].setMap(null);
    }
  });
  $('#gardenInn').change(function() {
    if(this.checked) {
      markers[7].setMap(map);
      hotel = gardenInn;
    }
    else{
      markers[7].setMap(null);
    }
  });
  $('#leDauphin').change(function() {
    if(this.checked) {
      markers[8].setMap(map);
      hotel = leDauphin;
    }
    else{
      markers[8].setMap(null);
    }
  });
  $('#interContinental').change(function() {
    if(this.checked) {
      markers[9].setMap(map);
      hotel = interContinental;
    }
    else{
      markers[9].setMap(null);
    }
  });
  $('#laRonde').change(function() {
    if(this.checked) {
      markers[10].setMap(map);
    }
    else{
      markers[10].setMap(null);
    }
  });
  $('#mountRoyal').change(function() {
    if(this.checked) {
      markers[11].setMap(map);
    }
    else{
      markers[11].setMap(null);
    }
  });
  $('#notreDame').change(function() {
    if(this.checked) {
      markers[12].setMap(map);
    }
    else{
      markers[12].setMap(null);
    }
  });
  $('#olympicStadium').change(function() {
    if(this.checked) {
      markers[13].setMap(map);
    }
    else{
      markers[13].setMap(null);
    }
  });
  $('#mountRoyalPark').change(function() {
    if(this.checked) {
      markers[14].setMap(map);
    }
    else{
      markers[14].setMap(null);
    }
  });
  $('#oldMontreal').change(function() {
    if(this.checked) {
      markers[15].setMap(map);
    }
    else{
      markers[15].setMap(null);
    }
  });
  $('#biosphereMuseum').change(function() {
    if(this.checked) {
      markers[16].setMap(map);
    }
    else{
      markers[16].setMap(null);
    }
  });
  $('#glowParty').change(function() {
    if(this.checked) {
      markers[17].setMap(map);
    }
    else{
      markers[17].setMap(null);
    }
  });
  $('#iglooFest').change(function() {
    if(this.checked) {
      markers[18].setMap(map);
    }
    else{
      markers[18].setMap(null);
    }
  });
  $('#fireworks').change(function() {
    if(this.checked) {
      markers[19].setMap(map);
    }
    else{
      markers[19].setMap(null);
    }
  });
  $('#lanZhou').change(function() {
    if(this.checked) {
      markers[20].setMap(map);
    }
    else{
      markers[20].setMap(null);
    }
  });
  $('#imperial').change(function() {
    if(this.checked) {
      markers[21].setMap(map);
    }
    else{
      markers[21].setMap(null);
    }
  });
  $('#deliceOriental').change(function() {
    if(this.checked) {
      markers[22].setMap(map);
    }
    else{
      markers[22].setMap(null);
    }
  });
  $('#laBanquise').change(function() {
    if(this.checked) {
      markers[23].setMap(map);
    }
    else{
      markers[23].setMap(null);
    }
  });
  $('#mooseBawr').change(function() {
    if(this.checked) {
      markers[24].setMap(map);
    }
    else{
      markers[24].setMap(null);
    }
  });
  $('#orangeJulep').change(function() {
    if(this.checked) {
      markers[25].setMap(map);
    }
    else{
      markers[25].setMap(null);
    }
  });

  //

  $("#iterate").click(function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });


  // document.getElementById('submit').addEventListener('click', function() {
  //   calculateAndDisplayRoute(directionsService, directionsDisplay);
  // });

}

function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
}
//
//
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var waypts = [];
  if($('#ritzCarlton').is(':checked')){
    waypts.push({
      location: {lat : 45.500, lng: -73.578},
      stopover: true
    });
  }
  if($('#leCrystal').is(':checked')){
    waypts.push({
      location: {lat:45.497, lng: -73.573},
      stopover: true
    });
  }
  if($('#sofitelMontreal').is(':checked')){
    waypts.push({
      location: sofitelMontreal,
      stopover: true
    });
  }
  if($('#leSaintJames').is(':checked')){
    waypts.push({
      location: leSaintJames,
      stopover: true
    });
  }
  if($('#chateauVaudreuil').is(':checked')){
    waypts.push({
      location: chateauVaudreuil,
      stopover: true
    });
  }
  if($('#mountStephen').is(':checked')){
    waypts.push({
      location: mountStephen,
      stopover: true
    });
  }
  if($('#placeDarmes').is(':checked')){
    waypts.push({
      location: placeDarmes,
      stopover: true
    });
  }
  if($('#gardenInn').is(':checked')){
    waypts.push({
      location: gardenInn,
      stopover: true
    });
  }
  if($('#leDauphin').is(':checked')){
    waypts.push({
      location: leDauphin,
      stopover: true
    });
  }
  if($('#interContinental').is(':checked')){
    waypts.push({
      location: interContinental,
      stopover: true
    });
  }
  if($('#laRonde').is(':checked')){
    waypts.push({
      location: laRonde,
      stopover: true
    });
  }
  if($('#mountRoyal').is(':checked')){
    waypts.push({
      location: mountRoyal,
      stopover: true
    });
  }
  if($('#notreDame').is(':checked')){
    waypts.push({
      location: notreDame,
      stopover: true
    });
  }
  if($('#olympicStadium').is(':checked')){
    waypts.push({
      location: olympicStadium,
      stopover: true
    });
  }
  if($('#mountRoyalPark').is(':checked')){
    waypts.push({
      location: mountRoyalPark,
      stopover: true
    });
  }
  if($('#oldMontreal').is(':checked')){
    waypts.push({
      location: oldMontreal,
      stopover: true
    });
  }
  if($('#biosphereMuseum').is(':checked')){
    waypts.push({
      location: biosphereMuseum,
      stopover: true
    });
  }
  if($('#glowParty').is(':checked')){
    waypts.push({
      location: glowParty,
      stopover: true
    });
  }
  if($('#iglooFest').is(':checked')){
    waypts.push({
      location: iglooFest,
      stopover: true
    });
  }
  if($('#fireworks').is(':checked')){
    waypts.push({
      location: fireworks,
      stopover: true
    });
  }
  if($('#lanZhou').is(':checked')){
    waypts.push({
      location: lanZhou,
      stopover: true
    });
  }
  if($('#imperial').is(':checked')){
    waypts.push({
      location: imperial,
      stopover: true
    });
  }
  if($('#deliceOriental').is(':checked')){
    waypts.push({
      location: deliceOriental,
      stopover: true
    });
  }
  if($('#laBanquise').is(':checked')){
    waypts.push({
      location: laBanquise,
      stopover: true
    });
  }
  if($('#mooseBawr').is(':checked')){
    waypts.push({
      location: mooseBawr,
      stopover: true
    });
  }
  if($('#orangeJulep').is(':checked')){
    waypts.push({
      location: orangeJulep,
      stopover: true
    });
  }

    directionsService.route({
    origin: hotel,
    destination: hotel,
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (hotel == "") {
      window.alert("Please choose a hotel as start point.")
    }
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
      var summaryPanel = document.getElementById('directions-panel');
      summaryPanel.innerHTML = '';
      // For each route, display summary information.
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
        '</b><br>';
        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
      }
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });


}








// function initMap() {
//   // Map options
//   var options = {
//     zoom: 10.5,
//     center: {lat:45.5510, lng:-73.6550} //Montreal
//   }
//
//   // New Map
//   var map = new google.maps.Map(document.getElementById('map'), options);
//
//   //Imports directionService
//   var directionsService = new google.maps.DirectionsService;
//   var directionsDisplay = new google.maps.DirectionsRenderer({
//     draggable: true,
//     map: map,
//     panel: document.getElementById('right-panel')
//   });
//
//   // Listen for click on map
//   google.maps.event.addListener(map, 'click', function(event) {
//     // Add marker
//     addMarker(event.latLng);
//   });
//   var myLatLong = event.latLng;
//   addMarker({lat: 45.4857, lng:-73.5957});
//
//   // Add marker function
//   function addMarker(coords) {
//     var marker = new google.maps.Marker({
//       position: coords,
//       map: map,
//       // icon:
//     });
//   }


//
//   document.getElementById('submit').addEventListener('click', function() {
//     calculateAndDisplayRoute(directionsService, directionsDisplay);
//     });
//   }
//
//   function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//     var waypts = [];
//     var checkboxArray = document.getElementByClassName('categories');
//     for (var i = 0; i < checkboxArray.length; i++) {
//       if (checkboxObject.checked) {
//         waypts.push({
//           location: $('.messageCheckbox:checked').val();,
//           stopover: true
//         });
//       }
//     }
//
//     directionsService.route({
//       origin: "montreal, quebec",
//       destination: "montreal, quebec",
//       waypoints: waypts,
//       optimizeWaypoints: true,
//       travelMode: 'DRIVING'
//     }, function(response, status) {
//       if (status === 'OK') {
//         directionsDisplay.setDirections(response);
//         var route = response.routes[0];
//         var summaryPanel = document.getElementById('directions-panel');
//         summaryPanel.innerHTML = '';
//         // For each route, display summary information.
//         for (var i = 0; i < route.legs.length; i++) {
//           var routeSegment = i + 1;
//           summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + '</b><br>';
//           summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
//           summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
//           summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
//         }
//       } else {
//         window.alert('Directions request failed due to ' + status);
//       }
//     });
//   }
//
// }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}
function myFunction(id,pid) {
  var checkBox = document.getElementById(id);
  var text = document.getElementById(pid);
  if (checkBox.checked == true){
      text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

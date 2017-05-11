var mapImg = document.querySelector(".map img");
var searchHotels = document.querySelector(".btn-search");
var popup = document.querySelector(".popup-search");

mapImg.classList.add("block-display");
popup.classList.add("block-display");
searchHotels.addEventListener("click", function (evt){
  popup.classList.toggle("block-display");
});

function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(34.8731945,-111.7613001)
  }
  var GoogleMap = new google.maps.Map(document.querySelector(".js-map"),
                                mapOptions);
  var myLatLng = new google.maps.LatLng(34.8731945,-111.7613001);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: GoogleMap,
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

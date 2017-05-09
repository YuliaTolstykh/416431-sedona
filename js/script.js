var map=document.querySelector(".map");
var GoogleMap=document.querySelector("iframe");
var searchHotels=document.querySelector(".btn-search");
var popup=document.querySelector(".popup-search");

searchHotels.addEventListener("click", function (evt){
  popup.classList.toggle("block-display");
});

map.addEventListener("click", function (evt) {
  map.classList.add("block-display");
  GoogleMap.classList.remove("block-display");
});

$(document).ready(function(){

  new WOW({
    mobile: false
  }).init();

  $('.collapse').on('show.bs.collapse', function(){
    $(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
  });

  $('.collapse').on('hide.bs.collapse', function(){
    $(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
  });

  $('#myForm').validator();

  $('.form-sel').select2({
    minimumResultsForSearch: Infinity
  });

  // Smooth scroll to main menu
  // and register form
  $('.scroll').click(function(event){
    event.preventDefault();

    var id = $(this).attr('href');
    var top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1000);

  });


});
function initMap(){
  // Map options
  var sydney = {lat: -33.865143, lng: 151.209900};
  var options = {
    zoom: 8,
    center: sydney
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Add Marker
  var marker = new google.maps.Marker({
    position: sydney,
    map: map,
  });

  //Info window
  var infoWindow = new google.maps.InfoWindow({
    content: '<h3>Cyber-Security Forum</h3>'
  });
  marker.addListener('click', function(){
    infoWindow.open(map, marker)
  });
}

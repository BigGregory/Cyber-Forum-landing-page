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
  $('.scroll').click(function(event){
    event.preventDefault();

    var id = $(this).attr('href');
    var top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1000);

  });
  // Smooth scroll to register form
  // $('#register').click(function(event){
  //   event.preventDefault();
  //
  //   var id = $(this).attr('href');
  //   var top = $(id).offset().top;
  //
  //   $('body,html').animate({scrollTop: top}, 1200);
  //
  // });

});

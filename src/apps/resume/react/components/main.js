$(document).ready(function(){
    $('.carousel').carousel();
});

$(document).ready(function() {
    $('select').material_select();
});

$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});


  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });


$( document ).ready(function(){
    $(".button-collapse").sideNav();
});


$('.button-collapse').sideNav({
    menuWidth: 240, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

$(document).ready(function(){
    $('.parallax').parallax();
});

$(document).ready(function(){
    $('.slider').slider({full_width: true});
});

$(document).ready(function(){
    $('.carousel').carousel();
});

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


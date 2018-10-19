'use strict';

// using Bootstrap's scrollspy to toggle active nav item
$('body').scrollspy({ target: '#top-nav', offset: 55 })
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});

// typed text that appears on page load in the intro section
var typedTitle = new Typed("#typed-title-loc", {
  stringsElement: '#typed-title',
  typeSpeed: 20,
  showCursor: false,
});

var typedLang = new Typed("#typed-lang-loc", {
  stringsElement: '#typed-languages',
  typeSpeed: 20,
});

// handles the button that fades in after the typed text appears
$(document).ready(function () {
  $('#connect-link').hide().delay(2000).fadeIn(800);
});

// handles the behavior when clicking a nav item in the navbar
$('a.nav-link').on('click', function () {
  // collapses the navbar on nav item click
  // $('.btn-navbar').click(); //bootstrap 2.x
  // $('.navbar-toggle').click(); //bootstrap 3.x by Richard
  // $('.navbar-toggler').click(); //bootstrap 4.x

  // // adds active class on nav link item when clicked
  // $('a.nav-link').removeClass('active');
  // $(this).closest('a.nav-link').addClass('active');

  // does a smooth scroll to the chosen section rather instantly moving to the section
  var href = $(this).attr('href');
  $('html,body').animate({
    scrollTop: $(href).offset().top
  },
    'slow');
});
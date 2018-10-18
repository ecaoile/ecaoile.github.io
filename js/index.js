'use strict';

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
  $('.btn-navbar').click(); //bootstrap 2.x
  $('.navbar-toggle').click(); //bootstrap 3.x by Richard
  $('.navbar-toggler').click(); //bootstrap 4.x

  // adds active class on nav link item when clicked
  $('a.nav-link').removeClass('active');
  $(this).closest('a.nav-link').addClass('active');

  // does a smooth scroll to the chosen section rather instantly moving to the section
  var href = $(this).attr('href');
  $('html,body').animate({
    scrollTop: $(href).offset().top
  },
    'slow');
});

// Cache selectors
// var topMenu = $("nav"),
//   topMenuHeight = topMenu.outerHeight() + 15,
//   // All list items
//   menuItems = topMenu.find("a"),
//   // Anchors corresponding to menu items
//   scrollItems = menuItems.map(function () {
//     var item = $($(this).attr("href"));
//     if (item.length) { return item; }
//   });

// // Bind to scroll
// $(window).scroll(function () {
//   // Get container scroll position
//   var fromTop = $(this).scrollTop() + topMenuHeight;

//   // Get id of current scroll item
//   var cur = scrollItems.map(function () {
//     if ($(this).offset().top < fromTop)
//       return this;
//   });
//   // Get the id of the current element
//   cur = cur[cur.length - 1];
//   var id = cur && cur.length ? cur[0].id : "";
//   // Set/remove active class
//   menuItems
//     .parent().removeClass("active")
//     .end().filter("[href='#" + id + "']").parent().addClass("active");
// });​
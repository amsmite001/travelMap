(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


var index = 4;
function addDestinationToSelect(){
  var setDestin = document.createElement('option');
  setDestin.text = document.getElementById('addDestination').value;

  if(setDestin.text != '') {
  setDestin.value = index;
  index += 1;

  document.getElementById('destination').appendChild(setDestin);

  document.getElementById('addDestination').value = ' ';
  }
}


//Clear the form upon submission
function clearForm(){
  document.getElementById("tripForm").reset();
}

//Verify that the date field has been correctly inputed, if so, send to the DB and clear the form.
function verifyForm(sD){
  startDate = document.getElementById("tripForm").elements["startDate_InputField"].value;
  endDate = document.getElementById("tripForm").elements["endDate_InputField"].value;
  console.log(startDate);
  if(startDate.length <=0 || endDate.length<= 0) {
        alert('You need to enter a date!');
  }
  else {
    clearForm();
    $('#notifModal').modal('show');
  }

}

$(document).ready(function(){
  $("#mangTripNotif").modal('show');
});

function sendAlert(message){
  alert(message);
}
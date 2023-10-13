$(document).ready(function () {
    // Function to animate the skill bars
    function animateSkillBars() {
      $('#skills-container .skill').each(function () {
        var percentage = $(this).find('.progress-bar').css('--percentage'); // Get the percentage from custom CSS property
        $(this)
          .find('.progress-bar')
          .animate({ width: percentage }, 1000); // Animate the width to the percentage value
      });
    }
  
    // Check when the "about" section is in view
    $('#about').waypoint(
      function () {
        animateSkillBars(); // Animate the skill bars when the "about" section is in view
      },
      {
        offset: '75%', // Adjust this offset as needed for when you want the animation to start
      }
    );
  });

// Send message notif
  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contactForm");
    const sendmessageDiv = document.getElementById("sendmessage");
    const dismissMessageBtn = document.getElementById("dismissMessage");
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the form from submitting
  
      
      sendmessageDiv.style.display = "block";
    });
  
    // Add an event listener to the "X" button to hide the message and clear the form
    dismissMessageBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the button from submitting (it is inside a form)
      sendmessageDiv.style.display = "none"; // Hide the message
      contactForm.reset(); // Clear the form
    });
  });
  
  

  
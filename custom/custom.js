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
  
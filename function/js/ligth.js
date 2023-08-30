//bật tắt đèn
$(document).ready(function () {
  $('.sidebar-link').on('click', function (e) {
    e.preventDefault(); // Prevent default link behavior

    // Load light.html into the home section
    $('.home-section .text').load($(this).attr('href'), function () {
      // Code here will run after the content of light.html is loaded

      const lightbulb = document.querySelector('.fa-lightbulb'); // Lightbulb icon
      const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

      if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function () {
          if (this.checked) {
            lightbulb.style.color = '#f1f50a'; // Change color to yellow
          } else {
            lightbulb.style.color = ''; // Revert to default color
          }
        });
      } else {
        console.error(".switch input[type='checkbox'] not found");
      }
    });
  });
});
  
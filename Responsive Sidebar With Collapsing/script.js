window.onload = function () {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    



    closeBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

 

    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right")
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu")
        }
    }
}
//hiển thị nội dung từng element trong side bar mà không phải load lại trang

document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".nav-list a");

  sidebarLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const contentURL = this.getAttribute("href");
          removeBackground();
          loadContent(contentURL);
      });
  });

  function removeBackground() {
      const contentElement = document.querySelector(".home-section"); // Thay ".content" bằng selector của phần tử chứa background
      contentElement.style.backgroundImage = 'none'; // Loại bỏ hình nền
  }

  function loadContent(contentURL) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", contentURL, true);

      xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
              const contentElement = document.querySelector(".home-section");
              contentElement.innerHTML = xhr.responseText;
          }
      };

      xhr.send();
  }
});

// bật tắt đèn
// $(document).ready(function () {
//   $('.sidebar-link').on('click', function (e) {
//     e.preventDefault(); // Prevent default link behavior

//     // Load light.html into the home section
//     $('.home-section .text').load($(this).attr('href'), function () {
//       // Code here will run after the content of light.html is loaded

//       const lightbulb = document.querySelector('.fa-lightbulb'); // Lightbulb icon
//       const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

//       if (toggleSwitch) {
//         toggleSwitch.addEventListener('change', function () {
//           if (this.checked) {
//             lightbulb.style.color = '#f1f50a'; // Change color to yellow
//           } else {
//             lightbulb.style.color = ''; // Revert to default color
//           }
//         });
//       } else {
//         console.error(".switch input[type='checkbox'] not found");
//       }
//     });
//   });
// });

// bật tắt quạt
// $(document).ready(function () {
//   $('.sidebar-link').on('click', function (e) {
//     e.preventDefault(); // Prevent default link behavior

//     // Load light.html into the home section
//     $('.home-section .text').load($(this).attr('href'), function () {
//       // Code here will run after the content of light.html is loaded

//       const lightbulb = document.querySelector('.fan-color'); // Lightbulb icon
//       const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

//       if (toggleSwitch) {
//         toggleSwitch.addEventListener('change', function () {
//           if (this.checked) {
//             lightbulb.style.color = '#f1f50a'; // Change color to yellow
//           } else {
//             lightbulb.style.color = ''; // Revert to default color
//           }
//         });
//       } else {
//         console.error(".switch input[type='checkbox'] not found");
//       }
//     });
//   });
// });
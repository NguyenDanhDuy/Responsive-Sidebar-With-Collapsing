/*

inspiration: 
https://dribbble.com/shots/2292415-Daily-UI-001-Day-001-Sign-Up

*/

let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Thay đổi đường dẫn của trang web mà bạn muốn chuyển hướng đến
  window.location.href = 'http://127.0.0.1:5502/Responsive%20Sidebar%20With%20Collapsing/index.html'; // Thay bằng URL của trang web bạn muốn chuyển hướng
  
  // Hoặc sử dụng window.location.replace để chuyển hướng mà không thể quay lại trang trước đó
  // window.location.replace('https://example.com');
});

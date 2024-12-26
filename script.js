function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// JavaScript for toggling dark mode
const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode'); // Add/remove dark mode class
  if (document.body.classList.contains('dark-mode')) {
    icon.src = './assets/sun.png'; // Change icon to sun
  } else {
    icon.src = './assets/moon.png'; // Change icon to moon
  }
});

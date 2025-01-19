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
const body = document.body;
const toggleIcon = document.getElementById('icon'); // Desktop icon
const hamburgerIcon = document.getElementById('hamburger-icon'); // Hamburger menu icon

// Function to toggle dark mode
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  
  // Swap icons
  const iconPath = body.classList.contains('dark-mode') ? './assets/sun(1).png' : './assets/moon(1).png';
  toggleIcon.src = iconPath;
  hamburgerIcon.src = iconPath;
}

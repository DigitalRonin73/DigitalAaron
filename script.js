// Typing Effect
const typingText = "Welcome to my portfolio!";
let index = 0;
const typingElement = document.getElementById("typing-effect");

function typeText() {
  if (index < typingText.length) {
    typingElement.textContent += typingText[index];
    index++;
    setTimeout(typeText, 100);
  }
}
typeText();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
// Get Browser Information
const browser = navigator.userAgent.split(' ')[navigator.userAgent.split(' ').length - 1];
document.getElementById('browser').textContent = browser;

// Get Operating System
document.getElementById('os').textContent = navigator.platform;

// Get Language
document.getElementById('language').textContent = navigator.language;

// Get Screen Resolution
document.getElementById('resolution').textContent = `${window.screen.width} x ${window.screen.height}`;
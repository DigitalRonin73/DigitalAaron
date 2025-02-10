document.addEventListener("DOMContentLoaded", () => {
  // Typing Effect
  const typingText = "Welcome to my portfolio!";
  let index = 0;
  const typingElement = document.getElementById("typing-effect");

  function typeText() {
    if (typingElement && index < typingText.length) {
      typingElement.textContent += typingText[index];
      index++;
      setTimeout(typeText, 100);
    }
  }
  
  if (typingElement) {
    typeText();
  }

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Dark Mode Toggle
  const toggleButton = document.getElementById('dark-mode-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  // Visitor Information
  const browserElement = document.getElementById('browser');
  const osElement = document.getElementById('os');
  const languageElement = document.getElementById('language');
  const resolutionElement = document.getElementById('resolution');

  if (browserElement) {
    const browser = navigator.userAgent.split(' ')[navigator.userAgent.split(' ').length - 1];
    browserElement.textContent = browser;
  }

  if (osElement) {
    osElement.textContent = navigator.platform;
  }

  if (languageElement) {
    languageElement.textContent = navigator.language;
  }

  if (resolutionElement) {
    resolutionElement.textContent = `${window.screen.width} x ${window.screen.height}`;
  }
});

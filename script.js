const hello = document.getElementById("hello");

// List of languages to display
const languages = ["Hola", "Bonjour", "こんにちは", "안녕하세요", "Ciao", "Olá", "Привет"];

let index = 0;

// Set the initial language
hello.textContent = languages[index];

// Change the language every 2 seconds
setInterval(() => {
  index++;
  if (index >= languages.length) {
    index = 0;
  }
  hello.textContent = languages[index];
}, 2000);


$(document).ready(function() {
  // Check if an element is in the viewport
  function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Add the "animate" class to visible sections
  function animateSections() {
    $('.section').each(function() {
      if (isElementVisible(this)) {
        $(this).addClass('animate');
      }
    });
  }

  // Animate the sections on page load
  animateSections();

  // Animate the sections on scroll
  $(window).scroll(function() {
    animateSections();
  });
});


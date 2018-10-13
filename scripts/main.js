// Constructor function to type out the teaser text
const Typewriter = function(txtElement, words) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.typeLetters();
}

// Type method
Typewriter.prototype.typeLetters = function(){
  const currIdx = this.wordIndex % this.words.length;
  const currWord = this.words[currIdx];
  this.txt = currWord.substr(0, this.txt.length + 1);
  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

  setTimeout(() => this.typeLetters(), 500);
}

// Initiailize on DOM loading 
document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  new Typewriter(txtElement, words);
} 
  
// Brighten social icons when moused over
let icons = document.querySelectorAll('i');
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener('mouseenter', () => {
    icons[i].style.color = '#f2f4f7';
  });
}
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener('mouseleave', () => {
    icons[i].style.color = '#ccc';
  });
}
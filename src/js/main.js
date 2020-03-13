"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

const buttonsLoad = document.querySelector('.buttons__load--js');
const buttonsSave = document.querySelector('.buttons__save--js');
const textArea = document.querySelector('.form__textarea--js');

console.log(buttonsLoad);
console.log(buttonsSave);
console.log(textArea);

textArea.addEventListener('keyup', (e) => {
 console.log(e.target.value);
})



textArea.addEventListener('keyup', (e) => {
console.log('textArea', e.target.value);
 })


buttonsSave.addEventListener('click', (e) => {
  localStorage.setItem('textArea', textArea.value);
});


buttonsLoad.addEventListener('click', (e) => {
  textArea.value = localStorage.getItem('textArea');
});


